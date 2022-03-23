import Dot from './Dot';

export default class DotGrid {
  constructor(
    scene,
    numRows,
    numColumns,
    numColors,
    centerX,
    centerY,
    maxWidth,
    maxHeight
  ) {
    this.scene = scene;
    this.numRows = numRows;
    this.numColumns = numColumns;
    this.numColors = numColors;
    this.centerX = centerX;
    this.centerY = centerY;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.init();
  }

  init() {
    this.createCenterFromDots();
    this.createDotsGroup();
  }

  createCenterFromDots() {
    let widthToHeightRatio =
      (this.numColumns + 0.5) / (this.numRows * Math.cos(Math.PI / 6));

    if (widthToHeightRatio > this.maxWidth / this.maxHeight) {
      this.width = this.maxWidth;
      this.height = this.maxWidth / widthToHeightRatio;
    } else {
      this.width = this.maxHeight * widthToHeightRatio;
      this.height = this.maxHeight;
    }

    this.cellDistanceX = this.width / (this.numColumns + 0.5);
    this.cellDistanceY = this.height / this.numRows;
    this.dotScale = (0.8 * this.cellDistanceX) / 128;

    this.grid = new Array(this.numRows);

    for (let row = 0; row < this.numRows; row++) {
      this.grid[row] = new Array(this.numColumns);

      for (let column = 0; column < this.numColumns; column++) {
        const cellX =
          this.centerX - this.width / 2 + this.cellDistanceX * (column + 0.5);
        const cellY =
          this.centerY - this.height / 2 + this.cellDistanceY * (row + 0.5);

        this.grid[row][column] = {
          x: cellX,
          y: cellY,
          dot: null,
        };
      }
    }
  }

  createDotsGroup() {
    this.dotGroup = this.scene.add.group({
      defaultKey: 'dot',
      maxSize: this.numRows * this.numColumns * 2,
      classType: Dot,
      createCallback: (dot) => {
        dot.setName('dot' + this.dotGroup.getLength());
        dot.group = this.dotGroup;
        dot.dotScale = this.dotScale;

        dot.on('pointerdown', () => {
          this.scene.dotClicked(dot);
        });

        dot.on('pointerover', () => {
          this.scene.dotHovered(dot);
        });
      },
    });
  }

  createRandomDots() {
    this.colorBuckets = new Array(this.numColors);

    for (let i = 0; i < this.colorBuckets.length; i++) {
      this.colorBuckets[i] = [];
    }

    this.grid.forEach((row, indexRow) => {
      row.forEach((item, indexColumn) => {
        if (item.dot !== null) {
          this.dotGroup.killAndHide(item.dot);
          item.dot = null;
        }
        let dot = this.addNewDot({ x: item.x, y: item.y });
        dot.setGridPosition({ row: indexRow, column: indexColumn });
        this.grid[indexRow][indexColumn].dot = dot;
      });
    });
  }

  addNewDot(position) {
    let dot = this.dotGroup.get(position.x, position.y);
    if (!dot) {
      console.error('No dots available!');
      return null;
    }

    dot.setColorId(Math.floor(Math.random() * this.numColors));
    dot.indexInColorBucket = this.colorBuckets[dot.colorId].push(dot) - 1;
    dot.spawn();
    return dot;
  }

  removeDots(dots) {
    if (dots.length === 0) return;

    let colorId = dots[0].colorId;

    let columnLowestRowChanged = {};

    dots.forEach((dot) => {
      if (
        columnLowestRowChanged[dot.column] === undefined ||
        columnLowestRowChanged[dot.column] < dot.row
      ) {
        columnLowestRowChanged[dot.column] = dot.row;
      }
      this.colorBuckets[dot.colorId][dot.indexInColorBucket] = null;
      this.grid[dot.row][dot.column].dot = null;
      dot.despawn();
    });

    Object.keys(columnLowestRowChanged).forEach((column) => {
      const lowestRowChanged = columnLowestRowChanged[column];
      const remainingDots = [];
      column = Number(column);

      for (let row = 0; row <= lowestRowChanged; row++) {
        let dot = this.grid[row][column].dot;
        if (dot) {
          remainingDots.push(dot);
        }
      }

      for (let row = lowestRowChanged; row >= 0; row--) {
        let cell = this.grid[row][column];
        if (remainingDots.length > 0) {
          let dot = remainingDots.pop();
          this.moveDotToRow(dot, dot.row, row);
          dot.setGridPosition({ row: row, column: column });
          cell.dot = dot;
        } else {
          cell.dot = null;
        }
      }
    });

    const colorBucket = this.colorBuckets[colorId];
    let numDots = 0;

    for (let i = 0; i < colorBucket.length; i++) {
      if (colorBucket[i] !== null) {
        colorBucket[numDots] = colorBucket[i];
        colorBucket[numDots].indexInColorBucket = numDots;
        numDots++;
      }
    }

    this.colorBuckets[colorId] = colorBucket.slice(0, numDots);

    this.grid.forEach((row, indexRow) => {
      let delay = 300 + (indexRow / this.numRows) * 700;
      this.scene.time.delayedCall(
        delay,
        () => {
          row.forEach((cell, indexColumn) => {
            if (cell.dot === null) {
              cell.dot = this.addNewDot({ x: cell.x, y: cell.y });
              cell.dot.setGridPosition({ row: indexRow, column: indexColumn });
            }
          });
        },
        []
      );
    });
  }

  removeAllDotsColorId(colorId) {
    let colorBucket = this.colorBuckets[colorId];
    let numRemoved = colorBucket.length;
    this.removeDots(colorBucket);

    return numRemoved;
  }

  checkAdjacent(dot1, dot2) {
    let rowDiff = Math.abs(dot1.row - dot2.row);
    let columnDiff = Math.abs(dot1.column - dot2.column);

    if (rowDiff + columnDiff === 1) return true;

    if (dot1.row % 2 === 0) {
      if (dot2.column === dot1.column - 1 && rowDiff === 1) return true;
    } else {
      if (dot2.column === dot1.column + 1 && rowDiff === 1) return true;
    }

    return false;
  }

  moveDotToRow(dot, originalRow, targetRow) {
    let points = [];
    let column = dot.column;
    for (let row = originalRow; row <= targetRow; row++) {
      points.push(this.grid[row][column].x);
      points.push(this.grid[row][column].y);
    }

    let path = new Phaser.Curves.Path(
      this.grid[originalRow][column].x,
      this.grid[originalRow][column].y
    );
    path.splineTo(points);
    dot.startFall(path);
  }
}
