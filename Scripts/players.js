function fetchDataFromSheetDB(){
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
                    //Creating a div element

                    //Have check for tiers here
                    //tier 1 players
    
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


function createPlayerRow(item, dataContainer){

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row_' + item.tier);
    //console.log(item.last_name + "tier: 2")
    
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
    if (item.flame_or_fade == "Flame"){
        const playerFlame = document.createElement('div');
        playerFlame.classList.add('flame-div');

        const flamePic = document.createElement('img');
        flamePic.classList.add('flame-pic');

        flamePic.src = 'Images/Icons/flames.png';
        //removeCheckeredBackground(fire.src);
        playerFlame.appendChild(flamePic);

        rowDiv.appendChild(playerFlame);
    }

    else if (item.flame_or_fade == "Fade"){
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
        while (rowDiv.firstChild){
            rowDiv.style.display = 'none';
            rowDiv.removeChild(rowDiv.firstChild);
        }
    });

    rowDiv.appendChild(playerInfo);
    //rowDiv.appendChild(playerPic);
    rowDiv.appendChild(playerName);
    rowDiv.appendChild(playerRank);
    rowDiv.appendChild(playerPositionRank);
    rowDiv.appendChild(closeDiv);

    dataContainer.appendChild(rowDiv);

    //createPopup(item, rowDiv);
}

function editPopup(item){

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
    
    if(item.flame_or_fade == "Flame"){
        createBadgeWithDescription('Images/Icons/flames.png', badgeContainer, "This is a player I'm high on, and have been drafting a lot in mocks.")
    }

    if(item.flame_or_fade == "Fade"){
        createBadgeWithDescription('Images/Icons/snowflake.png', badgeContainer, "This is a player I'm fading, and not drafting unless I get them far later than their ADP.");
    }
    if(item.breakout == "Yes"){
        createBadgeWithDescription('Images/Icons/nuclear-power.png', badgeContainer, "Candidate for a breakout season this year. Extremely high upside.");
    }   

    if(item.recent_injury == "Yes"){
        createBadgeWithDescription('Images/Icons/red-cross.png', badgeContainer, "Player who suffered an injury recently.");
    }

    if(item.new_coach == "Yes"){
        createBadgeWithDescription('Images/Icons/coach.png', badgeContainer, "Player who is heading into the season with a new coach / OC.");
    }

    if(item.new_team == "Yes"){
        createBadgeWithDescription('Images/Icons/moving-truck.png', badgeContainer, "A player who is playing for a new team this season.");
    }

    if(item.hero == "Yes"){
        createBadgeWithDescription('Images/Icons/hero.png', badgeContainer, "This player is the number one option in their offense, regardless of the situation.");
    }

    if(item.expensive == "Yes"){
        createBadgeWithDescription('Images/Icons/pricey.png', badgeContainer, "This player is expensive at his draft position.");
    }

    if(item.easy_division == "Yes"){
        createBadgeWithDescription('Images/Icons/cupcake.png',badgeContainer, "This player plays in a weak division.")
    }
    
    if(item.difficult_division == "Yes"){
        createBadgeWithDescription('Images/Icons/shield.png', badgeContainer, "This player plays in a very competetive division.")
    }

    if(item.high_powered_o == "Yes"){
        createBadgeWithDescription('Images/Icons/nuclear-plant.png', badgeContainer, "This player is apart of high powered offense.");
    }

    if(item.old == "Yes"){
        createBadgeWithDescription('Images/Icons/hourglass.png', badgeContainer, "This player is older, and that could be a contributing factor to their output.");
    }

    if(item.rookie == "Yes"){
        createBadgeWithDescription('Images/Icons/rookie.png', badgeContainer, "This player is a rookie.");
    }

    if(item.ppr_machine == "Yes"){
        createBadgeWithDescription('Images/Icons/ppr.png', badgeContainer, "This player is a PPR machine, and excels at catching passes.");
    }

    if(item.big_play == "Yes"){
        createBadgeWithDescription('Images/Icons/big_play.png', badgeContainer, "This player has a better chance at creating big plays.");
    }

    if(item.goal_line == "Yes"){
        createBadgeWithDescription('Images/Icons/goal_line.png',badgeContainer, "This player's odds at scoring a touchdown close to the goal line are much higher than most.");
    }

}

function createBadgeWithDescription(badgeImageSrc, badgeContainer, description_input) {
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

//Functions for filtering players

const correctPassword = "The Rain Song";
function checkPassword(page){
    const passwordInput = prompt('Enter the password:');
    if(passwordInput === correctPassword){
        redirectToPage(page);
    }
    else{
        alert("You don't have authority to access this feature");
    }
}

function redirectToPage(page){
    if(page === 'create'){
        window.location.href = "Pages/Create_Player.html";
    }
}


const observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
        initializeSearch();
        //positionFilter();
        
        addFilters('qb');
        addFilters('rb');
        addFilters('wr');
        addFilters('te');
        addFilters('k');
        addFilters('d/st');
        resetFilter();

    });
});

observer.observe(document.body, {childList: true, subtree: true});

fetchDataFromSheetDB();


function initializeSearch(){

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


function addFilters(positionArg){
    
    const playerRows = document.querySelectorAll('[class^="row_"]');
    const filterString = positionArg + "-filter";
    const thisButton = document.getElementById(filterString);

    thisButton.addEventListener('click', function(){
        colorButtons(thisButton);
        playerRows.forEach(playerRow =>{
            const playerPosition = playerRow.querySelector('.position-rank').textContent.toLowerCase().substring(0,2);
            const shouldShow = playerPosition.includes(positionArg);
            playerRow.style.display = shouldShow ? 'block' : 'none';
        });

    });
}

function resetFilter(){

    const playerRows = document.querySelectorAll('[class^="row_"]');
    const resetButton = document.querySelector('reset-filter');

    resetButton.addEventListener('click', function(){
        colorButtons(resetButton);
        resetButton.style.color = "black";
        resetButton.style.backgroundColor = "white";
        playerRows.forEach(playerRow =>{
            playerRow.style.display = 'block';
        })

    })

}

function colorButtons(thisButton){
     const filters = document.querySelectorAll('button[id$="-filter"].pos-filter');
     filters.forEach(filter => {
        filter.style.color = "black";
        filter.style.backgroundColor = "white";
     })
     thisButton.style.color = "silver";
     thisButton.style.backgroundColor = "black";
}


