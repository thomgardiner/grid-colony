document.addEventListener("DOMContentLoaded", function(){
    console.log("Script loaded");

    let rowsY = 30;
    let rowsX = 30;
    let grid = [];

    class tile{
        constructor(state, floor, objects){
            this.state = state;
            this.floor = floor;
            this.objects = objects;
        }
    }

    //grid tile creation

    const initializeGrid = function(){
        for(i = 0; i < rowsY; i++){
            grid.push([]);
        }
    
        grid.forEach(function(row, index){
            for(i=0 ; i < rowsX; i++){
                row.push(new tile('Empty', 'Dirt', []));
            }
        })
    
        let container = document.getElementById('container');
        console.log(container);
    
        grid.forEach(function(row, index){
            let gridRow = document.createElement('div');
            gridRow.setAttribute('id', 'row-' + index);
            gridRow.setAttribute('class', 'row');
            container.append(gridRow);
        });
    
        grid.forEach(function(row, index){
    
            row.forEach(function(tile, index1){
                let gridTile = document.createElement('div');
                gridTile.setAttribute('id', index + '-' + index1);
                gridTile.setAttribute('class', 'tile');
                gridTile.addEventListener("click", () => getTileInfo(index, index1));
    
    
                let gridRow = document.getElementById('row-' + index);
                gridRow.append(gridTile);
            })
        });

    }

    //render tiles based on tile parameters

    
    const getTileInfo = function(y, x){
        console.log(grid[y][x]);

        let tileInfo = document.getElementById("tile-coord");
        tileInfo.textContent = y + "-" + x;

        let floorInfo = document.getElementById('floor-info');
        floorInfo.textContent = grid[y][x].floor;

    }

    const renderTiles = function(){
        
        grid.forEach(function(row, y){
            row.forEach(function(tile, x){
                let rTile = document.getElementById(y + '-' + x);

                switch(tile.floor){
                    case 'Dirt':
                        rTile.setAttribute('style', 'background-color: #594408');
                        break;

                    case 'Grass':
                        rTile.setAttribute('style', 'background-color: green');
                        break;
                }
            })
        })
    }


    initializeGrid();

    grid[5][3].floor = 'Grass';
    grid[5][4].floor = 'Grass';
    grid[5][5].floor = 'Grass';
    grid[5][6].floor = 'Grass';
    grid[5][7].floor = 'Grass';
    grid[6][3].floor = 'Grass';
    grid[6][4].floor = 'Grass';
    grid[6][5].floor = 'Grass';
    grid[6][6].floor = 'Grass';
    grid[6][7].floor = 'Grass';
    grid[7][3].floor = 'Grass';
    grid[7][4].floor = 'Grass';
    grid[7][5].floor = 'Grass';
    grid[7][6].floor = 'Grass';
    grid[7][7].floor = 'Grass';
    grid[8][3].floor = 'Grass';
    grid[8][4].floor = 'Grass';
    grid[8][5].floor = 'Grass';
    grid[8][6].floor = 'Grass';
    grid[8][7].floor = 'Grass';
    grid[9][3].floor = 'Grass';
    grid[9][4].floor = 'Grass';
    grid[9][5].floor = 'Grass';
    grid[9][6].floor = 'Grass';
    grid[9][7].floor = 'Grass';
    grid[10][3].floor = 'Grass';
    grid[10][4].floor = 'Grass';
    grid[10][5].floor = 'Grass';
    grid[10][6].floor = 'Grass';
    grid[10][7].floor = 'Grass';
    
    renderTiles();


  });