function create_geometry_15(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -0.615, 0.218, 1.228,
            -1.030, -1.737, 0.941,
            0.084, -0.238, 1.228,
            -1.030, -1.737, 0.941,
            -0.615, 0.218, 1.228,
            -1.537, -1.406, 0.941,
            -1.030, -1.737, 0.941,
            0.102, -0.249, 0.782,
            0.084, -0.238, 1.228,
            -0.615, 0.218, 1.228,
            -0.633, 0.230, 0.782,
               -1.537, -1.406, 0.941
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.083, -0.128, 0.988,
            -0.083, -0.128, 0.988,
            -0.083, -0.128, 0.988,
            -0.083, -0.128, 0.988,
            -0.083, -0.128, 0.988,
            -0.083, -0.128, 0.988,
            0.797, -0.602, 0.047,
            0.797, -0.602, 0.047,
            0.797, -0.602, 0.047,
            -0.872, 0.487, 0.047,
            -0.872, 0.487, 0.047,
               -0.872, 0.487, 0.047
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x7F7F7F,
            shininess: 50.000,
            ambient: 0x000000,
            side: THREE.DoubleSide,
            specular: 0xFFFFFF
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
