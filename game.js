document.addEventListener("DOMContentLoaded", function(){
    console.log("Script loaded");

    let rowsY = 30;
    let rowsX = 30;
    let grid = [];

    class tileConstructor {
        constructor(state, floor, objects){
            this.state = state;
            this.floor = floor;
            this.objects = objects;
        }
    }

    //grid tile creation

    for(i = 0; i < rowsY; i++){
        grid.push([]);
    }

    grid.forEach(function(row, index){
        for(i=0 ; i < rowsX; i++){
            row.push(new tileConstructor('Empty', 'Dirt', []));
        }
    })

    console.log(grid);
    console.log(grid[5][3]);

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
            let gridRow = document.getElementById('row-' + index);
            gridRow.append(gridTile);
        })
    });


    

    const renderTiles = function(){
        
        grid.forEach(function(row, y){
            row.forEach(function(tile, x){
                console.log(tile);
                let rTile = document.getElementById(y + '-' + x);

            
                switch(tile.floor){
                    case 'Dirt':
                        rTile.setAttribute('style', 'background-color: brown');
                        break;

                    case 'Grass':
                        rTile.setAttribute('style', 'background-color: green');
                        break;

                }
            })
        })
    }


    grid[5][3].floor = 'Grass';
    





    renderTiles();


  });