document.addEventListener('DOMContentLoaded',function () {

    const socket = io();
    console.log('hello');
    socket.emit('your_turn', 'Hi, Its now your turn');

    function send_notification() {
        var frm  = document.getElementById('formid');
        var data = {
            medicine: frm.elements[0].value,
            pres: frm.elements[1].value
        };
        console.log(data.medicine);console.log(data.pres);
        socket.emit('final_call',data);
        alert('Successfully alloted....');

    }

    document.getElementById('butt').onclick = send_notification;
});