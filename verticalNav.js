// const _tablinksEvent = document.getElementsByClassName("tablinks");
// for (var i = 0; i < _tablinksEvent.length; i++) {
//     _tablinksEvent[i].addEventListener('click', function() {
//         openCity(evt, cityName);
//     })
// }




function openCity(evt, cityName) {
    var i, _tabcontent, _tablinks;
    _tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < _tabcontent.length; i++) {
        _tabcontent[i].style.display = "none";
    }
    _tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < _tablinks.length; i++) {
        _tablinks[i].className = _tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();