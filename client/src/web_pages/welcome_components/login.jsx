import React from 'react';
import ReactDom from 'react-dom';
//import Form from 'bootstrap/Form'
import bootbox from 'bootbox';
import bootstrap from 'bootstrap'



const LoginModal = bootbox.confirm("<form id='infos' action=''>\
Username:<input type='text' name='user_name' /><br/>\
Password:<input type='text' password='password' />\
buttons:<confirm: submit:'submit', className:'btn-success' />\
</form>",
 function(result) {
    if(result)
        $('#infos').submit();
});
//LoginModal.modal('hide')

export default LoginModal