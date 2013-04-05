// ==UserScript==

// @name            Annotation Monkey
// @namespace       annotation
// @description     Annotation of any web page, with metadata hosted on a user-specified server
// @include         *
// @require         
// ==/UserScript==

function configure()
{
    // Pop up a configuration form and use GM_* to save stuff
}

GM_registerMenuCommand("Configure", configure);

defaultConfig = {
    ServerURL: null, 
    Username: null 
}

config = GM_getValue("configuration", defaultConfig);
if(config.ServerURL == null || config.Username == null) 
{
    // Force the menu prefilled with config values
}

// Create a modal form
$(function() {
    var username = $( "#username" ),
        serverurl = $( "#serverurl" ),
        allFields = $( [] ).add( username ).add( serverurl );
        //tips = $( ".validateTips" );

    $( "#configure-form" ).dialog({
        autoOpen: false,
        height: 300,
        width: 350,
        modal: false,
        buttons: {
            "OK": function() {

            },
            Cancel: function() {
                $( this ).dialog( "close" );
            }
        },
        close: function() {
            // Unset stuff
        }
    });
});

// Add the form to the dom.  Activate it if the configuration isn't done

