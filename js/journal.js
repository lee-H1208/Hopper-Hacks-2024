
const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryText = document.getElementsByClassName(`entry-text-box`);

function addEntryToDom(event) {
        event.preventDefault();
        const d = new Date();
        const month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        const n = month[d.getMonth()];
        const day = d.getDay();
        const year = d.getFullYear();


        const heading = document.createElement(`h2`);
        heading.className = `heading-results`;
        heading.textContent = `Journal Entries`;
        entryResultRow.insertAdjacentElement(`beforebegin`, heading)

        // Adding Div
        const entryDiv = document.createElement(`div`);
        entryDiv.className = `single-entry-div`;
        entryResultRow.appendChild(entryDiv);

        // Adding Div Element h3
        const entryHeading = document.createElement(`h3`);
        entryHeading.className = `single-entry-heading`;
        entryHeading.textContent = getEntryTitle[0].value;
        entryDiv.appendChild(entryHeading);

        // Adding Div Element Date

        const entryDate = document.createElement(`p`);
        entryDate.className = `single-entry-date`;
        // eslint-disable-next-line no-cond-assign
        if ((getEntryTitle[0].value = getEntryTitle[0].value)) {
                entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
                entryDiv.appendChild(entryDate);
        }

        // Adding Div Element paragraph

        const entryParagraph = document.createElement(`p`);
        entryParagraph.className = `single-entry-text`;
        entryParagraph.textContent = getEntryText[0].value;
        entryDiv.appendChild(entryParagraph);
        getEntryText[0].value = ``;
}

entryForm.addEventListener(`submit`, addEntryToDom);

(function( $ ) {
        const wpgpt_message_history = [];
    
        $(document).ready( function() {
            $(".wpgpt-toggle").click( function() {
                $(".wpgpt-chatbox").toggle();
            } );
    
            $(".wpgpt-send").click( wpgpt_send_message );
            $(".wpgpt-chat-input").keydown( function( e ) {
                if( e.which === 13 && ! e.shiftKey ) {
                    wpgpt_send_message();
                    e.preventDefault();
                }
            } );
        } );
    
        function wpgpt_send_message() {
            let message = $(".wpgpt-chat-input").val();
            wpgpt_add_message( message, "user" );
            $(".wpgpt-chat-input").val("");
    
            let payload = {
                "message": message,
                "message_history": wpgpt_message_history
            };
    
            $.ajax({
                url: '/wp-json/wpgpt/v1/send-message',
                method: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify( payload ),
                success: function( response ) {
                    wpgpt_add_message( response.message, "assistant" );
                    wpgpt_message_history.push( {
                        "role": "user",
                        "content": message,
                    } );
                    wpgpt_message_history.push( {
                        "role": "assistant",
                        "content": response.message.replace( "\n", "<br>" ),
                    } );
                },
                error: function() {
                    wpgpt_add_message( "Sorry, there was an error", "assistant" );
                }
              });
        }
    
        function wpgpt_add_message( message, role ) {
            let message_box = `
            <div class="wpgpt-chat-message ${role}">
                ${nl2br(message)}
            </div>`
    
            $(".wpgpt-chat-messages").append( message_box );
    
            $(".wpgpt-chat-messages").animate({
                scrollTop: $(".wpgpt-chat-messages")[0].scrollHeight
            });
        }
    
        function nl2br( text ) {
            return text.replace( /\n/g, "<br />" );
        }
    })(jQuery);