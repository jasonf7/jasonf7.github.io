$(function () {
	var data = [
		{
			name: "Core Objectives",
			items: [
				{
					name: "Primitives",
					title: "Objective 1: Primitives",
					description: "The sphere, cube, and truncated plane primitives can be rendered.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "primitive.png", caption: ""}
					],
					footer: ""
				},
				{
					name: "Texture mapping",
					title: "Objective 2: Texture Mapping",
					description: "Image textures can be mapped to all three primitives.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "texture.png", caption: ""},
						{src: "dice.png", caption: ""},
						{src: "stone.png", caption: ""},
						{src: "world.png", caption: ""}
					],
					footer: ""
				},
				{
					name: "Bump mapping",
					title: "Objective 3: Bump Mapping",
					description: "Imaginary bumps can be mapped onto the surface of primitives given a heightmap image or procedurally.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "bumpmap1.png", caption: "Rendering with light at (5.0, 0.0, 0.0)"},
						{src: "bumpmap2.png", caption: "Rendering with light at (-5.0, 0.0, 0.0)"},
						{src: "world_height.png", caption: ""}
					],
					footer: ""
				},
				{
					name: "Reflection",
					title: "Objective 4: Reflection",
					description: "Reflection rays are cast from incident rays.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "reflection.png", caption: "The max depth is 8 rays."}
					],
					footer: ""
				},
				{
					name: "Refraction",
					title: "Objective 5: Refraction",
					description: "Refraction rays are cast from incident rays.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "refraction1.png", caption: ""},
						{src: "refraction2.png", caption: ""},
						{src: "refraction3.png", caption: ""},
						{src: "refraction4.png", caption: ""}
					],
					footer: "Index of refraction of 1.0, 1.1, 1.3, 1.5"
				},
				{
					name: "Glossy reflection",
					title: "Objective 6: Glossy Reflection",
					description: "Multiple reflection rays are perturbed based on a cone and their colours averaged.",
					carouselWidth: 512,
					carouselHeight: 256,
					images: [
						{src: "glossyreflection1.png", caption: ""}
					],
					footer: "Spheres with Phong exponent values of 25, 100, and 1000 respectively with 20 perturbed rays."
				},
				{
					name: "Adaptive supersampling",
					title: "Objective 7: Adaptive Supersampling",
					description: "Pixels are supersampled adaptively based on the difference of colour between the rays cast from the corners and in the middle.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "adaptivess1.png", caption: "Original image"},
						{src: "adaptivess2.png", caption: "Supersampled image"},
						{src: "adaptivess_diff.png", caption: "Supersampled pixels (red)"}
					],
					footer: ""
				},
				{
					name: "Depth of field",
					title: "Objective 8: Depth of Field",
					description: "A depth of field effect is achieved by fixing the primary ray to intersect a point on the focal plane and perturbing the eye position based on a radial disk.",
					carouselWidth: 256,
					carouselHeight: 256,
					images: [
						{src: "depthoffield3.png", caption: ""},
						{src: "depthoffield2.png", caption: ""},
						{src: "depthoffield1.png", caption: ""}
					],
					footer: "Focal distance is varied between 200, 400, and 600 using 5 samples for eye positions."
				},
				{
					name: "Soft shadows",
					title: "Objective 9: Soft Shadows",
					description: "A soft shadow effect by introducing an area light and casting multiple shadow rays using regular grid sampling.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "softshadow1.png", caption: "Sampling over 3x3 grid"},
						{src: "softshadow2.png", caption: "Sampling over 10x10 grid"}
					],
					footer: ""
				},
				{
					name: "Final scene",
					title: "Objective 10: Final Scene",
					description: "A final scene is rendered using most of the core objectives + extra objectives.",
					carouselWidth: 900,
					carouselHeight: 600,
					images: [
						{src: "final1.png", caption: ""}
					],
					footer: ""
				}
			]
		},
		{
			name: "Extra Objectives",
			items: [
				{
					name: "Primitives",
					title: "Extra Objective 1: Primitives",
					description: "The cylinder and cone primitives can be rendered.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "extraprimitive.png", caption: ""}
					],
					footer: ""
				},
				{
					name: "Glossy refraction",
					title: "Extra Objective 2: Glossy Refraction",
					description: "Multiple refraction rays are perturbed based on a cone and their colours averaged.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "glossyrefraction1.png", caption: ""}
					],
					footer: "Index of refraction of 1.5. 50 perturbed rays are cast at a refractive object's intersection."
				},
				{
					name: "Motion blur",
					title: "Extra Objective 3: Motion Blur",
					description: "A motion blur effect can be achieved by associating each primitive with a velocity and sampling primary rays over time per pixel.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "motionblur1.png", caption: "Both objects have zero velocity"},
						{src: "motionblur2.png", caption: "Both objects have non-zero velocity (20 samples taken over 0.5 units of time"}
					],
					footer: ""
				},
				{
					name: "Phong shading",
					title: "Extra Objective 4: Phong Shading",
					description: "Ray intersection normals are interpolated over mesh faces using barycentric interpolation.",
					carouselWidth: 128,
					carouselHeight: 128,
					images: [
						{src: "phongshading2.png", caption: ""},
						{src: "phongshading1.png", caption: ""}
					],
					footer: ""
				},
			]
		},
		{
			name: "Extra Features",
			items: [
				{
					name: "Multithreading",
					title: "Extra Feature 1: Multithreading",
					description: "Ray tracing is parallelized by distributing the work over multiple threads. The image is split into mxm blocks of pixels and thread i is responsible for every ith block.",
					carouselWidth: 610,
					carouselHeight: 419,
					images: [
						{src: "multithreading1.png", caption: ""},
						{src: "multithreading2.png", caption: ""}
					],
					footer: "These results are generated by rendering a 128x128 image of macho-cows.lua on my personal Macbook Pro 2012."
				},
				{
					name: "Fresnel effect",
					title: "Extra Feature 2: Fresnel Effect",
					description: "For refractive surfaces, the fresnel effect is applied.",
					carouselWidth: 512,
					carouselHeight: 512,
					images: [
						{src: "fresnel.png", caption: ""},
						{src: "fresnel1.png", caption: ""}
					],
					footer: ""
				}
			]
		}
	]

	var prevActiveButton = null;

	for (var i in data) {
		var category = data[i];

		$("<h2>", {
			'class': "my-4",
			text: category.name
		}).appendTo($("#categoryColumn"));

		var listDiv = $("<div>", {
			'class': "list-group"
		}).appendTo($("#categoryColumn"));

		for (var j in category.items) {
			var item = category.items[j];
			var firstButton = i == 0 && j == 0;
			var extraClass = firstButton ? " active" : "";
			var button = $("<button>", {
				type: "button",
				'class': "list-group-item list-group-item-action" + extraClass,
				text: item.name
			}).appendTo(listDiv);

			if (firstButton) {
				prevActiveButton = button;
				updateUI(item);
			}

			$(button).click(item, function (event){
				if (event.target == prevActiveButton) return;
				if (prevActiveButton) {
					$(prevActiveButton).removeClass("active");
				}
				$(event.target).addClass("active");
				prevActiveButton = event.target;
				updateUI(event.data);
			});
		}
	}

	function updateUI(item) {
		$("#itemTitle").text(item.title);
		$("#itemDescription").text(item.description);
		$("#itemCarouselIndicators").empty();
		$("#itemCarouselImages").empty();
		for (var i in item.images) {
			var image = item.images[i];
			var indicatorLink = $("<li>", {
				'class': i == 0 ? "active" : null
			}).appendTo($("#itemCarouselIndicators"));
			indicatorLink.data({target: "#itemCarousel", 'slide-to': i});

			var carouselItem = $("<div>", {
				'class': i == 0 ? "carousel-item active" : "carousel-item"
			});

			$("<img>", {
				'class': "img-fluid",
				src: "img/" + image.src
			}).appendTo(carouselItem);

			$("<div>", {
				'class': "carousel-caption d-none d-md-block",
				text: image.caption
			}).appendTo(carouselItem);

			$("#itemCarouselImages").append(carouselItem);
		}
		$("#itemCarousel").css('width', item.carouselWidth);
		$("#itemCarousel").css('height', item.carouselHeight);
		$("#itemFooter").text(item.footer);
	}

});