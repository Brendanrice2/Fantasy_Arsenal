function fetchDataFromSheetDB(){
    /**
     * Function to fetch player data from API, and create base containers as well as
     * player rows for each player in the fetched data.
     * 
     */

    const sheetDBApiEndpoint = 'https://sheetdb.io/api/v1/fc74l8c82eqve';
    fetch(sheetDBApiEndpoint)
        .then(response => response.json())
        .then(data => {
            
            data.sort((a,b) => a.rank - b.rank);

            const dataContainer_1 = document.getElementById('player_container_1');
            const dataContainer_2 = document.getElementById('player_container_2');
            const dataContainer_3 = document.getElementById('player_container_3');
            const dataContainer_4 = document.getElementById('player_container_4');
            const dataContainer_5 = document.getElementById('player_container_5');
            const dataContainer_6 = document.getElementById('player_container_6');
            const dataContainer_7 = document.getElementById('player_container_7');
            const dataContainer_8 = document.getElementById('player_container_8');
            const dataContainer_9 = document.getElementById('player_container_9');
            const dataContainer_10 = document.getElementById('player_container_10');

            if(data.length > 0) {
                data.forEach(item => {
    
                    if (item.tier== 1){
                        createPlayerRow(item,dataContainer_1);

                    }

                    else if(item.tier == 2){

                        createPlayerRow(item, dataContainer_2);
                        
                    }
                    
                    else if(item.tier == 3){
                        
                        createPlayerRow(item,dataContainer_3);
                    
                    }

                    else if(item.tier == 4){

                        createPlayerRow(item,dataContainer_4);
                    }

                    else if(item.tier == 5){

                        createPlayerRow(item,dataContainer_5);
                    }

                    else if(item.tier == 6){

                        createPlayerRow(item,dataContainer_6);
                    }

                    else if(item.tier == 7){

                        createPlayerRow(item, dataContainer_7);
                    }

                    else if(item.tier == 7){

                        createPlayerRow(item, dataContainer_7);
                    }

                    else if(item.tier == 8){

                        createPlayerRow(item, dataContainer_8);
                    }

                    else if(item.tier == 9){

                        createPlayerRow(item, dataContainer_9);
                    }

                    else if(item.tier == 10){

                        createPlayerRow(item, dataContainer_10);
                    }

                });
            } else{
                dataContainer_1.textContent('No data found.');

            }
        })

        .catch(error => {
            console.log('Error fetching data from SheetDB', error);
        });
}

// Data structure used to hold information on icons used throughout the site
icon_map = {
    flame: {'src': 'Images/Icons/flames.png', 'attribution': 'Flames icons created by Flat Icons - Flaticon'},
    fade: {'src': 'Images/Icons/snowflake.png', 'attribution': 'Snowflake icons created by Freepik - Flaticon'},
    info: {'src': 'Images/Icons/info.png', 'attribution': 'Info icons created by Plastic Donut - Flaticon'},
    close: {'src': 'Images/Icons/close.png', 'attribution': 'Close icons created by inkubators - Flaticon'},
    dessert: {'src': 'Images/Icons/cupcake.png', 'attribution': 'Dessert icons created by Freepik - Flaticon'},
    coach: {'src': 'Images/Icons/coach.png', 'attribution': 'Coach icons created by Futuer - Flaticon'},
    edit: {'src': 'Images/Icons/edit.png', 'attribution': 'Edit icons created by Kiranshastry - Flaticon'},
    superhero: {'src': 'Images/Icons/hero.png', 'attribution': 'Superhero icons created by Freepik - Flaticon'},
    sandclock: {'src': 'Images/Icons/hourglass.png', 'attribution': 'Sand clock icons created by Freepik - Flaticon'},
    truck: {'src': 'Images/Icons/moving-truck.png', 'attribution': 'Truck icons created by Freepik - Flaticon'},
    nuclearPlant: {'src': 'Images/Icons/nuclear-plant.png', 'attribution': 'Nuclear icons created by Konkapp - Flaticon'},
    nuclearPower: {'src': 'Images/Icons/nuclear-power.png', 'attribution': 'Nuclear power icons created by Freepik - Flaticon'},
    coin: {'src': 'Images/Icons/pricey.png', 'attribution': 'Coin icons created by Freepik - Flaticon'},
    redCross: {'src': 'Images/Icons/red-cross.png', 'attribution': 'Red cross icons created by Freepik - Flaticon'},
    sword: {'src': 'Images/Icons/shield.png', 'attribution': 'Sword icons created by Freepik - Flaticon'},
    letterR: {'src': 'Images/Icons/rookie.png', 'attribution': 'Letter icons created by Rakib Hassan Rahim - Flaticon'},
    magnet: {'src': 'Images/Icons/ppr.png', 'attribution': 'Magnet icons created by Freepik - Flaticon'},
    inches: {'src': 'Images/Icons/big_play.png', 'attribution': 'Inches icons created by smashingstocks - Flaticon'},
    spaceShuttle: {'src': 'Images/Icons/goal_line.png', 'attribution': 'Space shuttle icons created by Freepik - Flaticon'},

};

// Data structure used to store a badge, its image src, and description
badge_map = {
    flame: {'src': 'Images/Icons/flames.png', 'description': 'This is a player I\'m high on, and have been drafting a lot in mocks.'},
    fade: {'src': 'Images/Icons/snowflake.png', 'description': 'This is a player I\'m fading, and not drafting unless I get them far later than their ADP.'},
    breakout: {'src': 'Images/Icons/nuclear-power.png', 'description': 'Candidate for a breakout season this year. Extremely high upside.'},
    recent_injury: {'src': 'Images/Icons/red-cross.png', 'description': 'Player who suffered an injury recently.'},
    new_coach: {'src': 'Images/Icons/coach.png', 'description': 'Player who is heading into the season with a new coach / OC.'},
    new_team: {'src': 'Images/Icons/moving-truck.png', 'description': 'A player who is playing for a new team this season.'},
    hero: {'src': 'Images/Icons/hero.png', 'description': 'This player is the number one option in their offense, regardless of the situation.'},
    expensive: {'src': 'Images/Icons/pricey.png', 'description': 'This player is expensive at his draft position.'},
    easy_division: {'src': 'Images/Icons/cupcake.png', 'description': 'This player plays in a weak division.'},
    difficult_division: {'src': 'Images/Icons/shield.png', 'description': 'This player plays in a very competetive division.'},
    high_powered_o: {'src': 'Images/Icons/nuclear-plant.png', 'description': 'This player is apart of high powered offense.'},
    old: {'src': 'Images/Icons/hourglass.png', 'description': 'This player is older, and that could be a contributing factor to their output.'},
    rookie: {'src': 'Images/Icons/rookie.png', 'description': 'This player is a rookie.'},
    ppr_machine: {'src': 'Images/Icons/ppr.png', 'description': 'This player is a PPR machine, and excels at catching passes.'},
    big_play: {'src': 'Images/Icons/big_play.png', 'description': 'This player has a better chance at creating big plays.'},
}

// Variables to store the current attribution and info button divs, in order to hide them when another is clicked
var current_attribution = [];  
var current_info_button = [];

function createIconAttributions(){
    /**
     * Function to create the icon attributions using the icon_map data structure.
     */

    for (const [icon, info] of Object.entries(icon_map)){
        const iconAttribution = document.createElement('div');
        iconAttribution.classList.add('attribution_box');

        const iconImg = document.createElement('img');
        iconImg.src = info['src'];
        iconImg.classList.add('icon_attribution_img')

        const iconLink = document.createElement('a');
        iconLink.href = info['attribution'];
        iconLink.classList.add('icon_attribution_link');
        
        const infoButtonDiv = document.createElement('div');
        infoButtonDiv.classList.add('icon_info_div');
        const infoButton = document.createElement('img');
        infoButton.src = 'Images/Icons/info.png';
        infoButton.classList.add('icon_attribution_info');
        infoButtonDiv.appendChild(infoButton);

        infoButtonDiv.addEventListener('click', function(){
            const attribution_info_popup = document.createElement('div'); // attribution info div
            attribution_info_popup.classList.add('attribution_info_popup');
            attribution_info_popup.id = icon + '_attribution_info_popup';

            const attribution_info_text = document.createElement('span');   //attribution text
            attribution_info_text.textContent = info['attribution'];
            attribution_info_text.classList.add('attribution_info_text');

            const close_button_div = document.createElement('div');     //close button div
            close_button_div.classList.add('attribution_info_close_button_div');
            const close_button = document.createElement('img');
            close_button.src = 'Images/Icons/close.png';
            close_button.classList.add('attribution_info_close_button');

            // closing other popups if open
            if (current_attribution.length != 0){
                current_attribution[0].style.display = 'none';
                current_attribution.splice(0,1);
                current_info_button[0].style.display = 'unset';
                current_info_button.splice(0,1);
                current_info_button.push(infoButtonDiv);
                current_attribution.push(attribution_info_popup);

            }
            else{
                current_attribution.push(attribution_info_popup);
                current_info_button.push(infoButtonDiv);
                
            }
            
            // close button event listener
            close_button.addEventListener('click', function(){
                attribution_info_popup.style.display = 'none';
                infoButtonDiv.style.display = 'unset';
            });

            close_button_div.appendChild(close_button);

            attribution_info_popup.appendChild(attribution_info_text); 
            attribution_info_popup.appendChild(close_button_div); 

            iconAttribution.appendChild(attribution_info_popup);
            attribution_info_popup.style.display = 'unset';
            
            // adjusting width of popup if text is too long
            if (attribution_info_text.textContent.length > 48){
                attribution_info_popup.style.width = '340px';
            }

            infoButtonDiv.style.display = 'none';

        });

        iconAttribution.appendChild(iconImg);
        iconAttribution.appendChild(iconLink);
        iconAttribution.appendChild(infoButtonDiv);

        const attribute_container = document.getElementById('attribute_container');
        attribute_container.appendChild(iconAttribution);

    }
}


function createPlayerRow(item, dataContainer){

    /**
     * Function create a player 'row' (div) for each player in the fetched data.
     * 
     * Params:
     * - item: Object containing player data
     * - dataContainer: Container to append the player row to
     */

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row_' + item.tier);
    rowDiv.id = item.id;    // Added change - might work to better grab specific player divs
    
    const playerName = document.createElement('span');
    playerName.textContent = item.first_name + ' ' + item.last_name;
    playerName.classList.add('name');

    const playerRank = document.createElement('span');
    playerRank.textContent = item.rank;
    playerRank.classList.add('rank');

    const playerPositionRank = document.createElement('span');
    playerPositionRank.textContent = item.position_rank;
    playerPositionRank.classList.add('position-rank');
   
    //flame or fade check
    if (item.flame == "Yes"){
        const playerFlame = document.createElement('div');
        playerFlame.classList.add('flame-div');

        const flamePic = document.createElement('img');
        flamePic.classList.add('flame-pic');

        flamePic.src = 'Images/Icons/flames.png';
        playerFlame.appendChild(flamePic);

        rowDiv.appendChild(playerFlame);
    }

    else if (item.fade== "Yes"){
        const playerFade = document.createElement('div');
        playerFade.classList.add('fade-div');

        const fadePic = document.createElement('img');
        fadePic.classList.add('fade-pic');

        fadePic.src = 'Images/Icons/snowflake.png';
        playerFade.appendChild(fadePic);

        rowDiv.appendChild(playerFade);
    }
    
    
    const playerInfo = document.createElement('div');
    playerInfo.classList.add('info-div');

    const infoPic = document.createElement('img');
    infoPic.classList.add('info-pic');
    infoPic.src = 'Images/Icons/info.png';
    playerInfo.appendChild(infoPic);

    playerInfo.addEventListener('click', function() {
        editPopup(item);
    });

    const closeDiv = document.createElement('div');
    closeDiv.classList.add('close-div');

    const closeRow = document.createElement('img');
    closeRow.classList.add('close-row');
    closeRow.src = 'Images/Icons/close.png';
    closeDiv.appendChild(closeRow);

    closeDiv.addEventListener('click', function(){
        draftedPlayers[item.id] = {};
        draftedPlayers[item.id].rowDiv = rowDiv;
        draftedPlayers[item.id].children = [];
        lastPickId = item.id;
        while (rowDiv.firstChild){
            draftedPlayers[item.id].children.push(rowDiv.firstChild);
            rowDiv.removeChild(rowDiv.firstChild);
        }
        rowDiv.style.display = 'none';
       
    });

    rowDiv.appendChild(playerInfo);
    //rowDiv.appendChild(playerPic);
    rowDiv.appendChild(playerName);
    rowDiv.appendChild(playerRank);
    rowDiv.appendChild(playerPositionRank);
    rowDiv.appendChild(closeDiv);

    dataContainer.appendChild(rowDiv);
}

function editPopup(item){

    /**
     * Function to edit popup for each player row.
     * 
     * Params:
     * - item: Object containing player data
     * 
     * Note:
     * - Commented out sections using player photos, as to avoid any copyright risk
     **/

    const playerPopup = document.getElementById('player-popup');
    playerPopup.style.display = "unset";

    const popupHeader = document.createElement('span');
    popupHeader.textContent = item.first_name + ' ' + item.last_name;
    popupHeader.classList.add('popup-header');

    const popupSubHead = document.createElement('span');
    popupSubHead.textContent = item.position_rank;
    popupSubHead.classList.add('popup-subhead');

    const popupAdp = document.createElement('span');
    popupAdp.textContent = "ADP: "+item.adp;
    popupAdp.classList.add('popup-adp');

    const popupRank = document.createElement('span');
    popupRank.textContent = item.rank;
    popupRank.classList.add('popup-rank');

    const popupSummary = document.createElement('span');
    popupSummary.textContent = item.summary;
    popupSummary.classList.add('popup-summary');

    /* 
    const popupPicture = document.createElement('img');
    popupPicture.src = 'Images/Player_Photos/' + item.first_name + '_' + item.last_name + '.png';
    popupPicture.classList.add('popup-picture');
    */

    const closeButton = document.createElement('img');
    closeButton.src = 'Images/Icons/close.png';
    closeButton.classList.add('close-button');

    const editButton = document.createElement('img');
    editButton.src = 'Images/Icons/edit.png';
    editButton.classList.add('edit-button');

    const badgeContainer = document.createElement('div');
    badgeContainer.classList.add('badge-container');

    closeButton.addEventListener('click', function() {

        while(playerPopup.firstChild){
            playerPopup.style.display = "none";
            playerPopup.removeChild(playerPopup.firstChild);
        }
    });

    editButton.addEventListener('click', function(){
        const thisId = item.id;
        const editPW = prompt('Enter password:');
        if (editPW === correctPassword){
            window.location.href = `Pages/Edit_Player.html?id=${encodeURIComponent(thisId)}`;
        }
        else{
            alert("You don't have access to this feature.");
        }
    });

    //badges, as well as badge popup description

    const badgesLabel = document.createElement('span');
    badgesLabel.textContent = "Badges";
    badgesLabel.classList.add('badges-label');
    

    getBadges(item, badgeContainer);

    playerPopup.appendChild(badgeContainer);
    playerPopup.appendChild(popupRank);
    playerPopup.appendChild(editButton);
    playerPopup.appendChild(badgesLabel);
    playerPopup.appendChild(closeButton);
    playerPopup.appendChild(popupHeader);
    playerPopup.appendChild(popupSubHead);
    playerPopup.append(popupAdp);
    playerPopup.appendChild(popupSummary);
    //playerPopup.appendChild(popupPicture);
    
}

function getBadges(item, badgeContainer){
    
    /**
     * Function to check player data for badges, and create badges with descriptions.
     * 
     * Params:
     * - item: Object containing player data
     * - badgeContainer: Container to append badges to
     */
    
    for (const [badge, info] of Object.entries(badge_map)){
        if (item[badge] == "Yes"){
            createBadgeWithDescription(info['src'], badgeContainer, info['description']);
        }
    }
    
}

function createBadgeWithDescription(badgeImageSrc, badgeContainer, description_input) {
    
    /**
     * Function to create a badge with a description.
     * 
     * Params:
     * - badgeImageSrc: Source / Path of the badge image
     * - badgeContainer: Container to append the badge to
     * - description_input: Description of the badge
     */

    const badge = document.createElement('img');
    badge.src = badgeImageSrc;
    badge.classList.add('badge-img');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');

    const description = document.createElement('span');
    description.textContent = description_input;
    description.classList.add('badge-description');
   
    descriptionContainer.appendChild(description);
    badgeContainer.appendChild(badge);
    badgeContainer.appendChild(descriptionContainer);

    badge.addEventListener('mouseenter', function(){
        descriptionContainer.style.display = 'block';
        const badgeRect = badge.getBoundingClientRect();
        descriptionContainer.style.top = badgeRect.top + 'px';
        descriptionContainer.style.left = badgeRect.left + badgeRect.width + 6 + 'px';
    });

    badge.addEventListener('mouseleave', function() {
        descriptionContainer.style.display = 'none';
    });
}

// Variable to store correct password
const correctPassword = "The Rain Song";

function checkPassword(page){
    /**
     * Function to check if the user input matches the correct password.
     * 
     * Params:
     * - page: Page to redirect to if password is correct
     */

    const passwordInput = prompt('Enter the password:');
    if(passwordInput === correctPassword){
        redirectToPage(page);
    }
    else{
        alert("You don't have authority to access this feature");
    }
}

function redirectToPage(page){
    /**
     * Function to redirect to the specified page.
     * 
     * Params:
     * - page: Page to redirect to
     */

    if(page === 'create'){
        window.location.href = "Pages/Create_Player.html";
    }
}


const observer = new MutationObserver(function(mutations){
    /**
     * Mutation Observer to check for changes in the DOM, and call the necessary functions.
     */
    mutations.forEach(function(mutation){
        // initializeSearch();
        // // addFilters('qb');
        // // addFilters('rb');
        // // addFilters('wr');
        // // addFilters('te');
        // // addFilters('k');
        // // addFilters('d/st');
        
        // applyFilter('position-filter')
        // resetFilter();

        // undoPick();
        initializeSearch();
        resetFilter();
        undoPick();
        if(mutation.type === 'childList' && mutation.addedNodes.length > 0){
            mutation.addedNodes.forEach(node=>{
                if(node.nodeType === 1 && node.classList.contains('pos-filter')) {
                    const position = node.id.replace('-filter', '');
                    applyFilter(position);
                }
            })
        }

    });
});

observer.observe(document.body, {childList: true, subtree: true});

const draftedPlayers = {};
var lastPickId;     // Stores the last pick id

function initializeSearch(){

    /**
     * Function to initialize the search functionality.
     */

    const searchInput = document.getElementById('searchPlayer');
    const playerRows = document.querySelectorAll('[class^="row_"]');

    searchInput.addEventListener('input', function(){
        const searchTerm = searchInput.value.toLowerCase();

        playerRows.forEach(playerRow =>{
            const playerLabel = playerRow.querySelector('.name').textContent.toLowerCase();
            const shouldShow = playerLabel.includes(searchTerm);
            playerRow.style.display = shouldShow ? 'block' : 'none';
        });
    });
}

// function addFilters(positionArg){
    
//     /**
//      * Function to add event listeners to each filter button.
//      * 
//      * Params:
//      * - positionArg: Position to filter by
//      */

//     console.log("Clicked: ", positionArg)

//     const playerRows = document.querySelectorAll('[class^="row_"]');
//     const filterString = positionArg + "-filter";
//     const thisButton = document.getElementById(filterString);

//     thisButton.addEventListener('click', function(){
//         colorFilters(thisButton, false);
//         playerRows.forEach(playerRow =>{
//             const playerPosition = playerRow.querySelector('.position-rank').textContent.toLowerCase().substring(0,2);
//             const shouldShow = playerPosition.includes(positionArg);
//             playerRow.style.display = shouldShow ? 'block' : 'none';
//         });

//     });
// }


function addFilters(){

    /**
     * Function to add event listeners to each filter button.
     * 
     */

    const positions = ['qb', 'rb', 'wr', 'te', 'k', 'd/st'];
    const filterContainer = document.getElementById('filter-container');
    const filterButtons = filterContainer.querySelectorAll('.pos-filter');

    filterButtons.forEach(filterButton => {
        filterButton.addEventListener('click', function(){
            const position = this.id.replace('-filter', '');
            applyFilter(position);
            // colorFilters(filterButton, false);
            // applyFilter(filterButton.id);
        });
    });

}

function applyFilter(position){

    /**
     * Function to apply the filter based on the position selected.
     * 
     * Params:
     * - position: Position to filter by
     */
    
    const playerRows = document.querySelectorAll('[class^="row_"]');

    playerRows.forEach(playerRow=>{
        const playerPosition = playerRow.querySelector('.position-rank').textContent.toLowerCase().substring(0,2);
        const shouldShow = playerPosition.includes(position);
        playerRow.style.display = shouldShow ? 'block' : 'none';
    });

}


function resetFilter(){

    /**
     * Function to reset the filter buttons.
     */

    const playerRows = document.querySelectorAll('[class^="row_"]');
    const resetButton = document.querySelector('.reset-filter');

    resetButton.addEventListener('click', function(){
        colorFilters(resetButton, true);
        playerRows.forEach(playerRow =>{
            playerRow.style.display = 'block';
            playerRow.querySelectorAll('*').forEach(child => {
                child.style.display = '';
            })
        })
    })

}

function colorFilters(thisButton, reset){

    /**
     * Function to color the filter buttons based on the actions performed by the user.
     * 
     * Parms:
     * - thisButton: Button that was clicked
     * - reset: Boolean to check if the filters need to be reset
     */
    
     const filters = document.querySelectorAll('button[id$="-filter"].pos-filter');

     //set all filters to original colors
     filters.forEach(filter => {
        filter.style.color = "black";
        filter.style.backgroundColor = "white";
     })

     //if not reset, change color of selected button
     if (reset === false){
        thisButton.style.color = "silver";
        thisButton.style.backgroundColor = "black";
     }
}

function undoPick(){

    /**
     * Function to undo the last pick made.
     * 
     * IN PROGRESS
     */

    const undoButton = document.getElementById('undo-button');
    const lastPick = draftedPlayers[lastPickId];

    console.log("last pick: ", lastPick);

    undoButton.addEventListener('click', function(){
        for (const id in draftedPlayers){
            const playerRow = draftedPlayers[id].rowDiv;
            playerRow.style.display = 'block';
            draftedPlayers[id].children.forEach(child => {
                playerRow.appendChild(child);
            });
        }
    });

    // undoButton.addEventListener('click', function(){
    //     // console.log(draftedPlayers[draftedPlayers.length -1]);
    //     const lastPick = (draftedPlayers[draftedPlayers.length - 1]);
    //     lastPick.style.display = 'block';
    //     console.log("HI");
    //     lastPick.querySelectorAll('*').forEach(child => {
    //         console.log(child);
    //         child.style.display = 'block';
    //     })
        

    //     // remember to remove this player from the draftplayers array
    // })
}

function initialSetup(){
    /**
     * Function to set up the initial state of the page.
     */

    //*------- Not correct implementation of filter buttons, they must be obersved
    // for (const position of positions){
    //     addFilters(position);
    // }

    createIconAttributions();
}

function main(){

    // createIconAttributions();

    // Function call to setup all initial eventlisteners, specific elements, and more.
    initialSetup();

    // Uncomment this when pushing
    fetchDataFromSheetDB();  
    
}

main();



