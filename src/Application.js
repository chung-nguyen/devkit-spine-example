import device;
import ui.TextView as TextView;
import spine.SpineAnimationView as SpineAnimationView;

exports = Class(GC.Application, function () {

  this.initUI = function () {
      
    var boy = new SpineAnimationView({
        imagePath: 'resources/images/spineboy',
        jsonFile: 'resources/images/spineboy/spineboy.json',          
        animationScale: 1.0,  
        superview: this.view,
        x: device.screen.width / 2,
        y: device.screen.height - 64,
        defaultAnimation: 'run',
        loop: 'true',
        autoStart: 'true'
    });

  };

  this.launchUI = function () {

  };

});
