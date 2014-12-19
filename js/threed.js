function getSpaceship(number,pc1,pc2,pc3,posx,posy,posz) {
	  var camera, scene, renderer;
      var light;
      var controls;
      var container = document.getElementById('contain');
      container.innerHTML = '';
      var thewidth = 1000;
      var theheight = 500;

      init();
      animate();

      function init() {


         renderer = new THREE.WebGLRenderer( { alpha: true } );
         renderer.setSize(thewidth, theheight);
         document.getElementById('contain').appendChild(renderer.domElement);
         renderer.setClearColor( 0x000000, 0 );

         camera = new THREE.PerspectiveCamera(pc1, thewidth / theheight, pc2,  pc3);
         camera.position.x = posx;
         camera.position.y = posy;
         camera.position.z = posz;
         camera.up = new THREE.Vector3(0, 0, 1);
         var target = new THREE.Vector3(0.000, 0.000, 0.000);
         camera.lookAt(target);

         controls = new THREE.TrackballControls(camera, container);
         controls.addEventListener( 'change', render);

         scene = new THREE.Scene();

         light = new THREE.PointLight(0x999999);
         light.position.set(1105.867, -1474.490, 2211.735);
         scene.add(light);
         light = new THREE.PointLight(0x4C4C4C);
         light.position.set(-1474.490, -1474.490, 1105.867);
         scene.add(light);
         light = new THREE.PointLight(0x4C4C4C);
         light.position.set(0.000, 1474.490, 1474.490);
         scene.add(light);

         var spaceship_container = new THREE.Object3D();
         scene.add(spaceship_container);

         // Empty spaceship here


         if (number == 0) {

	         create_geometry_0(spaceship_container);
	         create_geometry_1(spaceship_container);
	         create_geometry_2(spaceship_container);
	         create_geometry_3(spaceship_container);
	         create_geometry_4(spaceship_container);
	         create_geometry_5(spaceship_container);
	         create_geometry_6(spaceship_container);
	         create_geometry_7(spaceship_container);
	         create_geometry_8(spaceship_container);
	         create_geometry_9(spaceship_container);
	         create_geometry_10(spaceship_container);
	         create_geometry_11(spaceship_container);
	         create_geometry_12(spaceship_container);
	         create_geometry_13(spaceship_container);
	         create_geometry_14(spaceship_container);
	         create_geometry_15(spaceship_container);
	         create_geometry_16(spaceship_container);
	         create_geometry_17(spaceship_container);
	         create_geometry_18(spaceship_container);
	         create_geometry_19(spaceship_container);
	         create_geometry_20(spaceship_container);
	         create_geometry_21(spaceship_container);
	         create_geometry_22(spaceship_container);
	         create_geometry_23(spaceship_container);
	         create_geometry_24(spaceship_container);
	         create_geometry_25(spaceship_container);
	         create_geometry_26(spaceship_container);
	         create_geometry_27(spaceship_container);
	         create_geometry_28(spaceship_container);
         }

         else if (number == 1) {
         	create_geometry_1_0(spaceship_container);
         }

         else if (number == 2) {
         	create_geometry_2_0(spaceship_container);
         }

         window.addEventListener('resize', onWindowResize, false);
      }

      function onWindowResize() {

         camera.aspect = window.innerWidth / window.innerHeight;
         camera.updateProjectionMatrix();

         renderer.setSize(window.innerWidth, window.innerHeight);

         controls.handleResize();
         render();
      }

      function animate()
      {
         requestAnimationFrame(animate);
         renderer.render(scene, camera);
         controls.update();
      }

      function render()
      {
         renderer.render(scene, camera);
      }

}

getSpaceship(0,35,4.667,653.333,15.556,-15.394,10.712);