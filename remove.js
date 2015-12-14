document.addEventListener('DOMContentLoaded', function removeMoments() {
    var moments = document.getElementsByClassName('moments js-moments-tab');

    for (var i = 0; i < moments.length; i++) {
        moments[i].parentNode.removeChild(moments[i]);
    }
});

