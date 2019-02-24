km_to_pixels_ratio = 1188

sun_radius_km = 695508;
sun_radius_man_pixels = 45

mercury_radius_km = 2440
mercury_radius_man_pixels = 12

venus_radius_km = 6052
venus_radius_man_pixels = 17

earth_radius_km = 6371
earth_radius_man_pixels = 18

earth_moon_radius_km = 1737
earth_moon_radius_man_pixels = 8

mars_radius_km = 3390
mars_radius_man_pixels = 9

jupiter_radius_km = 69911
jupiter_radius_man_pixels = 39

saturn_radius_km = 58232
saturn_radius_man_pixels = 34

uranus_radius_km = 25362
uranus_radius_man_pixels = 22

neptune_radius_km = 24622
neptune_radius_man_pixels = 27

pluto_radius_km = 1188
pluto_radius_man_pixels = km_to_pixels(pluto_radius_km)


function setup() {
  createCanvas(800, 800);
  mercury = new Planet(mercury_radius_man_pixels, 34, 0.08)
  venus = new Planet(venus_radius_man_pixels, 45, 0.075)
  earth = new Planet(earth_radius_man_pixels, 60, 0.07)
  mars = new Planet(mars_radius_man_pixels, 76, 0.068)
  jupiter = new Planet(jupiter_radius_man_pixels, 95, 0.06)
  saturn = new Planet(neptune_radius_man_pixels, 115, 0.056)
  uranus = new Planet(uranus_radius_man_pixels, 135, 0.052)
  neptune = new Planet(neptune_radius_man_pixels, 300, 0.04)
  pluto = new Planet(3, 395, 0.034)
}

function draw() {
  let moon_color = color(212, 229, 229)
  let sun_color = color(255, 204, 0)
  let mercury_color = color(255, 237, 201)
  let venus_color = color(217, 107, 42)
  let earth_color = color(47, 82, 229)
  let mars_color = color(229, 53 ,32)
  let jupiter_color = color(229, 115, 33)
  let saturn_color = color(38, 194, 25)
  let uranus_color = color(136, 218, 229)
  let neptune_color = color(47, 204, 229)
  let pluto_color = color(217, 122, 116)
  background(51);
  translate(width / 2, height / 2)
  stroke(255);
  fill(255,204,0);
  noStroke();
  ellipse(0, 0, sun_radius_man_pixels, sun_radius_man_pixels);
  mercury.show(mercury_color, 0)
  mercury.orbit()
  venus.show(venus_color, 0)
  venus.orbit()
  earth.show(earth_color, 1)
  earth.orbit()
  mars.show(mars_color, 0)
  mars.orbit()
  jupiter.show(jupiter_color, 4)
  jupiter.orbit()
  saturn.show(saturn_color, 0)
  saturn.orbit()
  uranus.show(uranus_color, 0)
  uranus.orbit()
  neptune.show(neptune_color, 0)
  neptune.orbit()
  pluto.show(pluto_color, 0)
  pluto.orbit()
}

function km_to_pixels(km) {
  return km / km_to_pixels_ratio
}
