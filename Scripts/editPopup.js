/**
 * This file contains functions that operate on the edit popup.
 */

// Player id used to update player data

// badgeStatusMap = {};

editId = null;
editPosition = null;

function buildEditSaveButton(){

    const editCloseButton = document.getElementById('edit-closeout-button');

    editCloseButton.addEventListener('click', function(){

        const editCloseButton = document.getElementById('edit-closeout-button');
        const updatedData ={
            first_name: document.getElementById('edit-first-name').value,
            last_name: document.getElementById('edit-last-name').value,
            position: document.getElementById(editPosition).value,
            rank: document.getElementById('edit-rank').value,
            position_rank: document.getElementById('edit-position-rank').value,
            adp: document.getElementById('edit-adp').value,
            tier: document.getElementById('edit-tier').value,
            summary: document.getElementById('edit-summary').value,

        };

        for (const [badge, ,] of Object.entries(badge_map)){
            if (document.getElementById(badge).checked === true){
                updatedData[badge] = "Yes";
                console.log(badge + ": " + document.getElementById(badge).checked);

            }

            else{
                updatedData[badge] = "";
                console.log(badge + ": " + document.getElementById(badge).checked);
            }
        }
        // WORK ON THIS

        //MAKE SURE ID IS CORRECT, OR ELSE PLAYER DATA WILL BE INCORRECT
        fetch(`https://sheetdb.io/api/v1/fc74l8c82eqve/id/${encodeURIComponent(editId)}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data: updatedData}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            editCloseButton.click
        })

        .catch((error) => {
            console.error('Error:', error);
        });

        // Resetting thisId back to null after the edit popup is closed
        thisId = null;
        editPostion = null;
        const editContainer = document.getElementById('edit-container');
        editContainer.style.display = 'none';
        console.log("test: " + editContainer.style.display);
    });

}


function populateEditContainer(item, editContainer){
    /** 
     * Function to populate the edit container with player data.
     * 
     * Params:
     * - item: Object containing player data
     * - editContainer: Container to append the player data to
     */

    // Setting the player info
    console.log("POPULATING EDIT CONTAINER");
    const firstName = document.getElementById('edit-first-name');
    const lastName = document.getElementById('edit-last-name');
    const position = document.getElementById("edit-position-" + item.position.toLowerCase());

    const rank = document.getElementById('edit-rank');
    const positionRank = document.getElementById('edit-position-rank');
    const adp = document.getElementById('edit-adp');
    const tier = document.getElementById('edit-tier');
    const summary = document.getElementById('edit-summary');
    editId = item.id;
    editPosition = "edit-position-" + item.position.toLowerCase();

    firstName.value = item.first_name;
    lastName.value = item.last_name;
    position.checked = true;
    rank.value = item.rank;
    positionRank.value = item.position_rank;
    adp.value = item.adp;
    tier.value = item.tier;
    summary.value = item.summary;

    // Setting badges
    for (const [badge, ,] of Object.entries(badge_map)){
        const badgeButton = document.getElementById(badge);

        if(item[badge] === "Yes"){
            badgeButton.checked = true;
            console.log(badge + ", " + badgeButton.checked);
        }

        else{
            badgeButton.checked = false;
            console.log(badge + ", " + badgeButton.checked);
        }
        
    }

    console.log("COMPLETION OF BADGE SETTING");
    console.log("*****************");


}
