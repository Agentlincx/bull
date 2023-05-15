


import {GLTFLoader} from "./js/GLTFLoader.js";

/*
import * as gg from './js/three.module.js';


import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

import * as gg from 'three';
import * as GLTFLoader from 'ldd';
*/


(function(){
  var canvas = document.querySelector('#can1');

  const rend = new gg.WebGLRenderer({
    canvas: canvas,
    antialiasing: true,
    logarithmicDepthBuffer: true,
    shadowMap: true,
    //alpha: true,
    shadowMapType: gg.PCFSoftShadowMap
  });
  rend.shadowMap.enabled = true;
  rend.setClearColor(0x000000,0.96);


  var fov = 75;
  const cam = new gg.PerspectiveCamera(fov,
    0.1,
    1,
    900);
  cam.position.set(0,
    0,
    10);



  //scene
  const scene = new gg.Scene();
  scene.fog = new gg.Fog('white', 20, 100);

  const light = new gg.DirectionalLight('white',
    2);
  light.position.set(-9,
    3,
    9);
  light.castShadow = true;
  scene.add(light);


  var box = new gg.Points(new gg.SphereGeometry(18, 40, 40,), new gg.PointsMaterial({
    side: gg.FrontSide,
    size: 0.01,
    color: "white"
  }));
  scene.add(box);

  //var rew = new OrbitControls(cam,
  //rend.domElement);
  //rew.update();



  function anim() {

    requestAnimationFrame(anim);

    var canvas = rend.domElement;
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;

    cam.aspect = width/height;
    cam.updateProjectionMatrix();

    var needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      rend.setSize(width, height, false);
    }

    box.rotation.x += 0.001;
    box.rotation.y += 0.001;

    rend.render(scene, cam);

    //console.log(vb);
    //ec.render(anim);
  }
  
anim();

})();





(function robb() {

  var canvas = document.querySelector('#coin');

  const rend = new gg.WebGLRenderer({
    canvas: canvas,
    antialiasing: true,
    logarithmicDepthBuffer: true,
    shadowMap: true,
    alpha: true,
    shadowMapType: gg.PCFSoftShadowMap
  });
  rend.shadowMap.enabled = true;
  rend.setClearColor(0x000000,0);


  var fov = 75;
  const cam = new gg.PerspectiveCamera(fov,
    0.1,
    1,
    900);
  cam.position.set(0,
    0,
    20);



  //scene
  const scene = new gg.Scene();
  //scene.fog=new gg.Fog('white',50,100);
  
  const obj =new gg.Object3D();

  const light = new gg.DirectionalLight('white',
    2);
  light.position.set(-9,
    9,
    4);
  light.castShadow = true;
  scene.add(light);


  //var rew = new OrbitControls(cam,rend.domElement);
  //rew.update();


  var ld = new GLTFLoader();

  let mixer, cube, gltf, animations, func, funs;

  function flod(url) {
    return new Promise((resolve, reject)=> {
      ld.load(url, resolve, undefined, reject);
    });
  }


  (async ()=> {
    await flod('/js/coin.glb').then(gltf=> {

      animations = gltf.animations;
      mixer = new gg.AnimationMixer(gltf.scene);

      for (var prop in animations) {
        console.log(animations[prop]);
      }




      gltf.scene.position.set(0, 0, 0);
      gltf.scene.scale.set(8,8,8);
      obj.add(gltf.scene);
      obj.rotation.x=Math.PI*.5;
      scene.add(obj);



    },
      e=> {
        console.log(e);
      });
  })();




  const clock = new gg.Clock();


function anim() {

    requestAnimationFrame(anim);

    var canvas = rend.domElement;
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;

    cam.aspect = width/height;
    cam.updateProjectionMatrix();

    var needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      rend.setSize(width, height, false);
    }
    
      obj.rotation.z+=0.01;
      obj.rotation.y+=0.001;
      rend.render(scene, cam);

      
    }
    
    anim();


  })();

  
  
(function robt() {

  var canvas = document.querySelector('#robt');

  const rend = new gg.WebGLRenderer({
    canvas: canvas,
    antialiasing: true,
    logarithmicDepthBuffer: true,
    shadowMap: true,
    alpha: true,
    shadowMapType: gg.PCFSoftShadowMap
  });
  rend.shadowMap.enabled = true;
  rend.setClearColor(0x000000,
    0);


  var fov = 75;
  const cam = new gg.PerspectiveCamera(fov,
    0.1,
    1,
    900);
  cam.position.set(0,
    0,
    20);



  //scene
  const scene = new gg.Scene();
  //scene.fog=new gg.Fog('white',50,100);

  const light = new gg.DirectionalLight('white',
    2);
  light.position.set(-9,
    9,
    4);
  light.castShadow = true;
  scene.add(light);


  //var rew = new OrbitControls(cam,rend.domElement);
  //rew.update();


  var ld = new GLTFLoader();

  let mixer, cube, gltf, animations, func, funs;

  function flod(url) {
    return new Promise((resolve, reject)=> {
      ld.load(url, resolve, undefined, reject);
    });
  }

  var lani = [2, 0, 1, 3, 4, 5, 9, 11, 12, 13];

  (async ()=> {
    await flod('/js/RobotExpressive.glb').then(gltf=> {

      animations = gltf.animations;
      mixer = new gg.AnimationMixer(gltf.scene);

      //for (var prop in animations) {console.log(animations[prop]);}

      var bb = document.querySelector('#k4');



      func = (a, b, d, e, g, h)=> {
        var f = mixer.clipAction(animations[a]);
        if (h == true) {
          f.reset();
        }
        if (d != 0) {
          f.setDuration(d);
        }
        if (e != 0) {
          f.repetitions = e;
        }
        f.fadeIn(b);
        if (g != 0) {
          f.fadeOut(g);
        }


        f.play();

      }


      gltf.scene.position.set(0, -7, 0);
      gltf.scene.scale.set(2.3, 2.3, 2.3);
      scene.add(gltf.scene);



    },
      e=> {
        console.log(e);
      });
  })();




  const clock = new gg.Clock();


  var vb = 0, va = 0, ki;

  function anim() {

    requestAnimationFrame(anim);

    var canvas = rend.domElement;
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;

    cam.aspect = width/height;
    cam.updateProjectionMatrix();

    var needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      rend.setSize(width, height, false);
    }

    va++;
    vb++;

    if (va < 200) {
      cam.zoom += 0.004;
    }


    if (mixer) {
      mixer.update(clock.getDelta());
    }


    switch (true) {
      case vb <= 150:
        func(6, 1, 0, 0, 2, false);
        break;

      case vb == 200:
        func(12, 1, 3, 1, 0, true);
        break;

      case vb >= 650:
        ki = (Math.floor(Math.random()*lani.length-1))+1;

        vb = 352;
        func(lani[ki], 1, 4, 1, 0, true);

        break;



      default:
        // code

      }


      rend.render(scene, cam);

      //console.log(vb);
      //ec.render(anim);
    }
    
    anim();


  })();
  
 
