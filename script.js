var apiData = [];
var flags = []

function getAvatar() {
    var param = document.getElementById('name').value;
    const image = `https://robohash.org/${param}.png?bgset=any` || './notAvailable.png';
    var avatar = '';
    avatar += '<div>';
    avatar += '<h3 class="display-4">Your Avatar</h3>';
    avatar += '<img src=' + image  + ' alt="Sorry image not available"></img>';
    avatar += '</div>';
    document.getElementById('avatar').innerHTML = avatar;
}
