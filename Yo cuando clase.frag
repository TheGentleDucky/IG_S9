// Author: Sean Michael Owens Cruz
// Title: Yo cuando clase

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform sampler2D u_texture;

#define PI 3.14159265

vec3 row(float y) {
    return y<1.0?vec3(4064.,0.,0.):
           y<2.0?vec3(4112.,0.,0.):
           y<3.0?vec3(5840.,1728.,0.):
           y<4.0?vec3(5200.,1088.,640.):
           y<5.0?vec3(4112.,0.,0.):
           y<6.0?vec3(4368.,0.,0.):
           y<7.0?vec3(36897.,2112.,0.):
           y<8.0?vec3(19810.,512.,0.):
           y<9.0?vec3(10164.,64.,0.):
           y<10.0?vec3(7800.,0.,0.):
           y<11.0?vec3(2320.,0.,0.):
           y<12.0?vec3(3808.,0.,0.):
           y<13.0?vec3(1088.,0.,0.):
           y<14.0?vec3(1760.,0.,0.):
           y<15.0?vec3(3120.,0.,0.):
                   vec3(6168.,0.,0.);
}


void main() {

    // Coordenadas centrales
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = st * 2.0 - 1.0;
    p.x *= u_resolution.x / u_resolution.y;

    float r = length(p);
    float angle = atan(p.y, p.x);

    // Distorsión del túnel
    float distortion = sin(angle * 6.0 + u_time * 2.0) * 0.0;
    distortion += sin(angle * 13.0 - u_time * 3.0) * 0.02;

    float radius = r + distortion;

    // Profundidad y movimiento
    float depth = 1.0 / (radius + -0.208);

    float waves = sin(depth * 5.0 - u_time * 12.0);
    float bands = abs(waves);

    float inferno = bands  * 1.0;

    // Colores
    vec3 luz = vec3(0.120,0.041,0.000);
    vec3 fuego = vec3(0.330,0.136,0.029);
    vec3 destrucion = vec3(0.990,0.016,0.101);
    vec3 EMPSUR = vec3(0.680,0.003,0.074);

    vec3 color = mix(luz, fuego, smoothstep(0.504, 0.8, inferno));
    color = mix(color, destrucion, smoothstep(0.55, 0.95, bands));
    color = mix(color, EMPSUR, smoothstep(0.88, 1.0, inferno));
    color *= 1.0 - smoothstep(0.0, 1.5, r);

    // Agujero central
    float hole = smoothstep(0.10, 0.18, r);
    color *= hole;

	// Esqueleto
    vec2 sp = p;

    // Rotacion
    float t = u_time * 0.7;
    sp = mat2(cos(t),-sin(t),sin(t),cos(t))*sp;

    // Escala
    vec2 uv = sp / 0.30 + 0.5;

    if(uv.x>=0.0 && uv.x<1.0 && uv.y>=0.0 && uv.y<1.0) {

        float x = floor(uv.x*16.0);
        float y = floor((1.0-uv.y)*16.0);

        // Obtener los tres bits
        vec3 bits = mod(floor(row(y)/exp2(x)),2.0);

        // Identificar el color
        float id = dot(bits,vec3(1.0,2.0,4.0));

        if(id>0.5) {

            vec3 skull;

            if(id<1.5)
                skull=vec3(84.0,84.0,84.0)/255.0;
            else if(id<2.5)
                skull=vec3(113.0,111.0,76.0)/255.0;
            else if(id<3.5)
                skull=vec3(204.0,200.0,142.0)/255.0;
            else if(id<4.5)
                skull=vec3(247.0,243.0,181.0)/255.0;
            else if(id<5.5)
                skull=vec3(254.0,255.0,219.0)/255.0;
            else if(id<6.5)
                skull=vec3(159.0,18.0,17.0)/255.0;
            else
                skull=vec3(252.0,20.0,0.0)/255.0;

            color=skull;
        }
    }

    gl_FragColor=vec4(color,1.0);
}