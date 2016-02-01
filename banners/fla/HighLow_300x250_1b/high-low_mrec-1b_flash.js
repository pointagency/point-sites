(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 18,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_300x250_mask.png", id:"_300x250_mask"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/web.png", id:"web"}
	]
};



// symbols:



(lib._300x250_mask = function() {
	this.initialize(img._300x250_mask);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.web = function() {
	this.initialize(img.web);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,140);


(lib.webimg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.web();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,264,140);


(lib.t6 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABKIAAgPQgNgCgKgJQgKgJABgRIAAAAIAWAAQAAAKAFAFQAFAEAFAAQAHAAAEgDQAEgEAAgHQAAgGgEgEQgDgEgJgDQgQgHgIgFQgIgIAAgOQAAgOAIgIQAIgIANgCIAAgRIAMAAIAAARQAOACAIAKQAIAJgBAPIAAABIgWAAQAAgJgEgFQgEgFgGAAQgGAAgCADQgEAEAAAHQAAAGAEAEQACADAJAEQARAHAIAGQAJAHAAAOQAAAOgJAIQgIAIgOACIAAAPgANmAvQgKgMAAgTIAAgCQAAgRAKgMQAKgMATAAQAQAAAKAJQAJAJAAANIgVAAQAAgFgEgEQgDgEgHAAQgJAAgDAHQgEAFAAALIAAACQAAALAEAHQADAHAJAAQAHAAADgDQAEgEAAgGIAVAAIAAABQAAANgKAIQgKAJgPAAQgSAAgLgMgAMNA0QgHgHAAgMQAAgMAJgHQAKgHASAAIANAAIAAgGQAAgEgDgEQgEgDgGAAQgFAAgDADQgDACAAAFIgWAAIgBgBQAAgKAKgIQAKgIAQAAQAPAAAJAIQAKAIAAAMIAAAjIABALQAAAFACAFIgWAAIgCgGIgCgGQgDAGgGAEQgGAEgIAAQgNAAgHgHgAMgAYQgEADAAAGQAAAEADACQADADAFAAQAGAAAEgDQAFgDACgEIAAgMIgNAAQgHAAgEAEgALOA4QgFgDgEgGIgCAKIgTAAIAAh4IAWAAIAAAvQAEgFAFgDQAFgDAHAAQAQAAAIAMQAJAMAAATIAAABQAAATgJAMQgIALgQAAQgHAAgGgDgALMgHQgEACgCAEIAAAiQACAEAEACQAEACAFAAQAJAAAEgGQADgGAAgMIAAgBQAAgNgEgFQgDgHgJAAQgFAAgEACgAHKAyQgKgIAAgLIAAgBIAVAAQABAHAEADQAEADAHAAQAGAAADgCQAEgDAAgEQAAgEgEgDQgEgCgJgCQgPgDgIgGQgIgGAAgJQAAgLAKgHQAJgIAPAAQAQAAAKAIQAJAHAAAMIAAAAIgWAAQAAgFgDgDQgEgDgGAAQgFAAgEADQgDACAAAEQAAACAEADQADACAKACQAQADAHAGQAIAGAAALQAAALgKAIQgKAHgQAAQgRAAgJgJgAFxA0QgHgHAAgMQAAgMAJgHQAKgHASAAIANAAIAAgGQAAgEgDgEQgEgDgGAAQgFA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");
	this.shape.setTransform(0.3,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.8,0,209.7,25.1);


(lib.t5 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC539").s().p("AC6ApQgNgMAAgXIAAg4IAYAAIAAA3QAAANAFAHQAGAIAKgBQAKABAGgIQAGgHAAgNIAAg3IAXAAIAAA4QAAAXgNAMQgMAMgUAAQgTAAgNgMgAiyAnQgQgQAAgXQAAgWAQgPQAQgPAXgBQAWAAARAPIgMARQgHgFgGgDQgGgCgHAAQgNAAgKAJQgJAJAAANQAAAOAJAJQAJAKAMgBQAMAAAIgEIAAgcIAYAAIAAAlQgQAQgbAAQgYAAgPgOgAmPAjIAOgRQARAPAOAAQAGAAAEgDQAEgDAAgFQAAgEgEgDQgEgDgMgCQgSgFgIgFQgJgGAAgPQAAgPALgJQALgHAQgBQAKAAALAEQAKAEAIAGIgMARQgOgKgOAAQgGAAgDACQgEADAAAFQAAAFAEACQAFADAOADQAPAEAJAGQAIAHAAAOQAAAOgLAJQgKAJgSgBQgYAAgUgSgAE9A0IAAhmIAlAAQAYAAALAJQALAKAAATQAAARgLAJQgLAKgYgBIgNAAIAAAdgAFVADIAPAAQAMAAAEgDQAEgFAAgIQAAgJgFgFQgGgDgLAAIgNAAgAAaA0Igwg/IAAA/IgXAAIAAhmIAWAAIAxBBIAAhBIAXAAIAABmgAkKA0IAAhmIAXAAIAABmg");
	this.shape.setTransform(-1.5,11.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.6,0,80.2,22.3);


(lib.t3c = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE683A").s().p("AgNANQgFgFgBgIQABgHAFgGQAGgGAHAAQAHAAAHAGQAFAGAAAHQAAAIgFAFQgHAHgHAAQgHAAgGgHg");
	this.shape.setTransform(2,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AikBWQgJgCgGgDIAFgNQAFACAGACQAHACAHAAQAMAAAGgGQAFgGAAgMIAAgKQgEAGgGADQgHADgJAAQgRAAgKgNQgKgNAAgUIAAgCQAAgVAKgOQAKgOARAAQAKAAAGAEQAIADAEAHIACgMIANAAIAABdQAAATgKAJQgKAKgUAAQgIAAgHgCgAilgVQgHALAAAOIAAACQAAAOAGAJQAGAJANAAQAHAAAFgEQAGgEADgGIAAgqQgDgGgGgDQgEgEgIAAQgNAAgFAKgANFAqQgKgJAAgMIABgBIAQAAQABAJAGAFQAGAEAJAAQAKAAAEgEQAGgDAAgHQAAgFgFgEQgEgEgMgCQgRgEgJgFQgJgGAAgLQAAgMAKgIQAKgIAQAAQAQAAAKAIQAKAJAAAMIAAABIgRAAQAAgHgGgEQgFgFgIAAQgKAAgEAEQgFAEABAFQAAAGAEADQADADANADQARADAKAGQAIAGAAALQAAANgKAIQgLAIgQAAQgSAAgLgKgAMMAtQgGgGAAgOIAAg4IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA4QAAAHADADQADACAEAAIAEAAIADgBIACAMQgCACgDABIgIABQgKAAgHgHgAKpAmQgMgNABgVIAAgEQAAgSAMgOQAMgNAQAAQAUAAAKALQAJAMABATIAAAJIg+AAIAAABQgBANAIAJQAGAJAMAAQAJAAAGgCQAHgDAFgEIAGALQgEAFgJADQgIAEgMAAQgUAAgMgOgAK4gYQgHAHgBALIAAABIAsAAIAAgDQAAgKgGgHQgFgGgLAAQgIAAgGAHgAGpAsQgHgIAAgNQgBgOALgHQAMgGASAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgIAAgFAEQgFAEAAAGIgRAAIAAgBQAAgKAKgIQAKgJAQAAQARAAAJAIQAKAIAAAQIAAAsIABAJIACAKIgSAAIgCgIIAAgGQgFAGgHAFQgJAFgJAAQgOAAgIgIgAG5ALQgHAFABAHQAAAHADADQAEAEAIAAQAJAAAIgFQAIgFACgGIAAgPIgUAAQgKAAgGAFgAA9AmQgLgOAAgVIAAgCQAAgTALgNQAMgOAUAAQATAAAMAOQALANAAATIAAACQAAAWgLANQgMAOgTAAQgUAAgMgOgABKgWQgGAKAAANIAAACQAAAPAGAKQAGAKANAAQAMAAAHgKQAGgKAAgPIAAgCQAAgNgGgKQgHgJgMAAQgNAAgGAJgAhLAmQgNgNAAgVIAAgEQAAgSANgOQAMgNARAAQASAAAKALQAKAMAAATIAAAJIg+AAIAAABQABANAGAJQAHAJAMAAQAJAAAGgCQAHgDAFgEIAGALQgEAFgJADQgIAEgMAAQgUAAgLgOgAg+gYQgFAHgCALIAAABIAsAAIAAgDQAAgKgFgHQgGgGgKAAQgKAAgGAHgAl+AsQgHgIAAgNQgBgOALgHQAMgGASAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgIAAgFAEQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAQAAQARAAAJAIQAKAIAAAQIAAAsIABAJIACAKIgSAAIgBgIIgBgGQgFAGgIAFQgHAFgKAAQgOAAgIgIgAluALQgGAFAAAHQAAAHADADQAFAEAIAAQAIAAAIgFQAIgFACgGIAAgPIgUAAQgKAAgGAFgApDAmQgNgNAAgVIAAgEQAAgSANgOQAMgNAQAAQATAAAKALQAKAMAAATIAAAJIg+AAIAAABQABANAGAJQAHAJAMAAQAJAAAGgCQAHgDAFgEIAHALQgFAFgJADQgIAEgMAAQgUAAgLgOgAo2gYQgFAHgCALIAAABIAsAAIAAgDQAAgKgFgHQgGgGgLAAQgJAAgGAHgAqsAnQgKgNAAgUIAAgCQAAgVAKgOQAKgOASAAQAIAAAHADQAGADAEAGIAAg0IASAAIAACHIgOAAIgCgMQgFAHgHADQgHAEgJAAQgQAAgLgNgAqegVQgGALAAAOIAAACQAAAOAGAJQAGAJAMAAQAIAAAFgEQAFgDADgHIAAgqQgDgGgFgEQgGgDgGAAQgNAAgGAKgAKBAyIgggsIgKAAIAAAsIgSAAIAAiHIASAAIAABPIAKAAIAaglIAVAAIggArIAlAygAIHAyIAAhdIAQAAIACAOQAEgIAFgEQAHgEAIAAIADAAIADABIgDAQIgJgBQgGAAgFAEQgEADgDAGIAABCgAF3AyIABhlIAAAAIgpBlIgMAAIgphlIAAAAIABBlIgRAAIAAh+IAWAAIApBmIABAAIAohmIAWAAIAAB+gACkAyIAAhRIgPAAIAAgMIAPAAIAAgMQAAgQAHgIQAIgIAPAAIAGAAIAGACIgCANIgDgBIgGAAQgHAAgDAFQgEAEgBAJIAAAMIAVAAIAAAMIgVAAIAABRgAjjAyIAAg6QAAgMgGgGQgFgFgJAAQgIAAgGAEQgGADgDAGIAABEIgSAAIAAhdIAQAAIABAOQAFgIAHgEQAIgEAIAAQAQAAAJAJQAHAJABATIAAA6gAnAAyIAAhdIAPAAIACAOQAEgIAGgEQAGgEAIAAIADAAIAEABIgDAQIgJgBQgHAAgFAEQgEADgDAGIAABCgArdAyIAAhdIARAAIAABdgAsgAyIgZhXIgCgMIgBAAIgcBjIgPAAIgfh+IASAAIATBRIACAQIABABIAbhiIAPAAIAbBiIABAAIAWhiIAQAAIgeB+gArdhEIAAgRIARAAIAAARg");
	this.shape_1.setTransform(103.8,15.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197.3,27.8);


(lib.t3b = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE683A").s().p("AgNANQgFgFgBgIQABgHAFgGQAGgGAHAAQAHAAAHAGQAFAGAAAHQAAAIgFAFQgHAHgHAAQgHAAgGgHg");
	this.shape.setTransform(2,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(102.2,15.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192.1,27.8);


(lib.t3a = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE683A").s().p("AgNANQgFgFgBgIQABgHAFgGQAGgGAHAAQAHAAAHAGQAFAGAAAHQAAAIgFAFQgHAHgHAAQgHAAgGgHg");
	this.shape.setTransform(2,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiABXIAAiBIANAAIADAMQAEgHAHgEQAHgDAKAAQARAAAKAOQAKAOAAAVIAAACQAAAUgKANQgKANgRAAQgJAAgHgDQgGgDgFgGIAAAugAhmgbQgGAEgDAGIAAArQADAGAGAEQAFADAIAAQAMAAAGgJQAHgJAAgOIAAgCQAAgOgHgLQgGgKgNAAQgHAAgFADgAD4AnQgMgOAAgVIAAgCQAAgTAMgNQALgOAUAAQAUAAALAOQALANAAATIAAACQAAAWgLANQgLAOgUAAQgUAAgLgOgAEEgVQgGAKAAANIAAACQAAAPAGAKQAGAKANAAQAMAAAHgKQAGgKAAgPIAAgCQAAgNgGgKQgHgJgMAAQgNAAgGAJgACAAuQgGgGAAgOIAAg4IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA4QAAAHADADQADACAEAAIAEAAIADgBIACAMQgCACgEABIgHABQgLAAgGgHgAAWAtQgIgIAAgNQAAgOALgHQALgGATAAIATAAIAAgJQAAgJgFgFQgFgEgKAAQgIAAgFAEQgFAEAAAGIgRAAIAAgBQgBgKALgIQAKgJAQAAQAQAAAKAIQAKAIAAAQIAAAsIABAJIACAKIgSAAIgCgIIAAgGQgFAGgIAFQgIAFgJAAQgOAAgIgIgAAmAMQgHAFAAAHQAAAHAEADQAEAEAIAAQAJAAAIgFQAIgFACgGIAAgPIgUAAQgKAAgGAFgAjfAuQgGgGAAgOIAAg4IgPAAIAAgMIAPAAIAAgXIARAAIAAAXIASAAIAAAMIgSAAIAAA4QAAAHADADQADACAEAAIAEAAIADgBIACAMQgCACgEABIgHABQgLAAgGgHgAlCArQgKgJAAgMIABgBIAQAAQAAAJAHAFQAGAEAJAAQAJAAAFgEQAGgDAAgHQAAgFgFgEQgEgEgMgCQgSgEgIgGQgJgFAAgLQAAgMAKgIQAKgIAPAAQARAAAKAIQAKAJgBAMIAAABIgQAAQAAgHgGgEQgFgFgJAAQgJAAgEAEQgFAEAAAFQAAAGAEADQAEADAMADQASACAJAHQAJAGAAALQAAANgKAIQgLAIgQAAQgSAAgLgKgAmgAnQgMgNAAgVIAAgEQAAgSANgOQAMgNAQAAQATAAAKALQAKAMAAATIAAAJIg+AAIAAABQAAANAHAJQAHAJAMAAQAJAAAGgCQAHgDAFgEIAGALQgFAFgIADQgIAEgMAAQgUAAgMgOgAmSgXQgGAHgBALIAAABIAsAAIAAgDQAAgKgGgHQgFgGgLAAQgJAAgGAHgAIHAzIAAg3QAAgOgFgGQgFgGgKAAQgIAAgGAGQgFAGgBAKIAAA7IgSAAIAAg3QAAgOgFgGQgFgGgJAAQgIAAgFADQgFADgDAGIAABFIgRAAIAAhdIAPAAIACAMQAEgHAHgDQAIgEAJAAQAJAAAHAEQAHAFAEAIQAEgIAHgEQAIgFAKAAQAOAAAJAKQAIAKAAAUIAAA3gAFWAzIAAhdIAQAAIABAOQAFgIAFgEQAGgEAIAAIAEAAIADABIgDAQIgJgBQgGAAgFAEQgFADgCAGIAABCgAC6AzIAAhRIgPAAIAAgMIAPAAIAAgMQAAgQAIgIQAHgIAPAAIAGAAIAGACIgCANIgDgBIgFAAQgIAAgDAFQgEAEAAAJIAAAMIAUAAIAAAMIgUAAIAABRgAgZAzIAAiHIASAAIAACHgAoXAzIAAh+IApAAQAUAAAMAIQALAJAAARQAAAJgFAHQgGAGgJAEQAMACAHAJQAGAHAAAMQAAARgLAKQgMAJgTAAgAoGAlIAeAAQAMAAAGgGQAHgFAAgLQAAgLgGgFQgFgGgMAAIggAAgAoGgVIAcAAQAKAAAGgFQAGgFAAgKQAAgKgHgFQgGgGgNAAIgYAAg");
	this.shape_1.setTransform(68.3,15.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125.4,27.8);


(lib.t22 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC539").s().p("AFtAjIAOgRQARAPAOAAQAGAAAEgDQAEgDAAgFQAAgEgEgDQgEgDgLgCQgTgFgIgFQgIgGAAgPQAAgPAKgJQALgHAQgBQAKAAALAEQALAEAHAGIgMARQgOgKgOAAQgFAAgEACQgEADAAAFQABAFAEACQAEADAPADQAOAEAJAGQAIAHAAAOQAAAOgLAJQgKAJgSgBQgYAAgUgSgAgxApQgMgMAAgXIAAg4IAXAAIAAA3QAAANAGAHQAGAIAKgBQAKABAFgIQAFgHgBgNIAAg3IAYAAIAAA4QAAAXgNAMQgMAMgSAAQgTAAgOgMgAElA0Igxg/IAAA/IgYAAIAAhmIAWAAIAzBBIAAhBIAYAAIAABmgACQA0IgYghIgQAAIAAAhIgXAAIAAhmIAnAAQAZgBAKAJQALAIAAATQAAAWgUAIIAbAlgABoAAIARAAQANAAADgDQAFgEAAgIQAAgJgFgDQgEgDgLAAIgSAAgAifA0IAAhSIgfAAIAAgUIBUAAIAAAUIgeAAIAABSgAk0A0IAAhmIBMAAIAAAUIg0AAIAAAWIAuAAIAAASIguAAIAAAWIA1AAIAAAUgAmAA0IgYghIgQAAIAAAhIgXAAIAAhmIAnAAQAZgBAKAJQALAIAAATQAAAWgUAIIAaAlgAmoAAIARAAQANAAADgDQAFgEAAgIQAAgJgFgDQgEgDgLAAIgSAAg");
	this.shape.setTransform(-1.2,11.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46,0,89.7,22.3);


(lib.t2roll = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(71,1257.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1031.2,2483.5);


(lib.t1d = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC539").s().p("ADaA0IAAgpIgpAAIAAApIgYAAIAAhnIAYAAIAAAsIApAAIAAgsIAYAAIAABngAA1A0IAAhTIgeAAIAAgUIBTAAIAAAUIgdAAIAABTgAgsA0IAAhnIAXAAIAABngAiNA0IgXhHIgXBHIgRAAIglhnIAaAAIAUA7IATg7IAYAAIATA7IAVg7IAZAAIglBng");
	this.shape.setTransform(-2.2,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.4,0,48.8,22.3);


(lib.t1c = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFhAjIAOgRQARAPAOAAQAGAAAFgDQADgDAAgFQAAgEgEgDQgEgDgMgCQgRgFgJgFQgJgGAAgPQAAgPALgJQALgHAQgBQALAAAKAEQALAEAHAGIgMARQgOgKgOAAQgGAAgDACQgEADABAFQAAAFADACQAFADAOADQAQAEAIAGQAIAHAAAOQAAAOgKAJQgLAJgRgBQgZAAgUgSgABAAmQgQgQAAgWQAAgVAQgQQAQgPAXgBQAXABAQAPQAQAQAAAVQAAAWgQAQQgQAPgXAAQgXAAgQgPgABRgWQgJAKAAAMQAAANAJAKQAJAKANAAQANAAAJgKQAJgKAAgNQAAgMgJgKQgJgKgNAAQgNAAgJAKgAmjAmQgQgQAAgWQAAgVAQgQQAQgPAXgBQAXABAQAPQAQAQAAAVQAAAWgQAQQgQAPgXAAQgXAAgQgPgAmSgWQgJAKAAAMQAAANAJAKQAJAKANAAQANAAAJgKQAJgKAAgNQAAgMgJgKQgJgKgNAAQgNAAgJAKgAEaA0Igzg/IAAA/IgXAAIAAhmIAWAAIA0BBIAAhBIAWAAIAABmgAgWA0IAAhmIAWAAIAABmgAh6A0IAAhSIgfAAIAAgUIBTAAIAAAUIgdAAIAABSgAkTA0IAAhmIAlAAQAYAAALAJQALAKAAATQAAARgLAJQgMAKgXgBIgOAAIAAAdgAj8ADIAQAAQAMAAAEgDQAEgFAAgIQAAgJgFgFQgGgDgLAAIgOAAg");
	this.shape.setTransform(-1.5,11.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.1,0,87.3,22.3);


(lib.t1b = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEvA0IAAgqIgkg9IAZAAIAXAnIAWgnIAaAAIgkA9IAAAqgADNA0IgXgiIgQAAIAAAiIgXAAIAAhnIAnAAQAZAAAKAIQAKAIAAATQAAAXgTAIIAaAlgACmAAIARAAQAMAAAEgEQAFgEgBgIQABgJgFgCQgEgDgMgBIgRAAgABLA0IgKgXIgsAAIgKAXIgWAAIArhnIAXAAIAtBngAAeAJIAaAAIgMgcgAhNA0Igyg/IAAA/IgXAAIAAhnIAWAAIAzBCIAAhCIAYAAIAABngAjlA0IAAhnIAYAAIAABngAlqA0IAAhnIApAAQALAAAHACQAIADADAEQAIAJAAAKQgBAMgHAGIgEADIgEACQAKAAAGAHQAGAGAAAKQAAALgIAJQgJAJgVAAgAlSAgIAQAAQAJAAAFgDQAGgCAAgHQgBgIgFgCQgFgCgMAAIgNAAgAlSgIIAKAAQAKAAAFgCQAFgCgBgHQAAgIgDgCQgFgCgLAAIgKAAg");
	this.shape.setTransform(-0.7,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.1,0,72.7,22.3);


(lib.t1a = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC539").s().p("ADvA0IAAhnIBMAAIAAAVIg0AAIAAAWIAvAAIAAARIgvAAIAAAXIA1AAIAAAUgABeA0IAAhnIAlAAQAcAAAPAOQAPAOAAAXQAAAXgPAOQgPAPgdAAgAB1AgIAPAAQAQAAAJgJQAIgIAAgPQAAgOgIgIQgJgJgSAAIgNAAgAAaA0IgJgXIgqAAIgKAXIgZAAIAthnIAVAAIAtBngAgQAJIAYAAIgLgcgAh7A0IgXgiIgQAAIAAAiIgXAAIAAhnIAnAAQAZAAAKAIQALAIAAATQAAAXgUAIIAaAlgAiiAAIARAAQAMAAAEgEQAFgEAAgIQAAgJgFgCQgEgDgLgBIgSAAgAkdA0IAAhTIgeAAIAAgUIBTAAIAAAUIgeAAIAABTg");
	this.shape.setTransform(-1.7,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.3,0,63.7,22.3);


(lib.logo_mc = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2E").s().p("AAVA8QgjAAgIgCQgPgDgGgHQgGgIgCgNQgBgFAAgUQAAgVABgGQADgPAHgIQAJgIAZgCIAjgBQAoAAALADQARADAEANQADAHAAAPIgkAAQAAgEgCgFQgEgEgJAAIgzAAIgFABQgGACgDAFQgCAFAAAVQAAAPACAEQACAIAJABIAWABIAiAAQAMgBABgJIAAgIIguAAIAAgUIBSAAIAAAPQAAAZgDAHQgDAJgGAFQgJAEgOABgADrA7IAAguIhTAAIAAAuIglAAIAAh1IAlAAIAAAsIBTAAIAAgsIAlAAIAAB1gAhkA7IAAh1IAlAAIAAB1gAiWA7IAAguIhUAAIAAAuIgmAAIAAh1IAmAAIAAAsIBUAAIAAgsIAlAAIAAB1g");
	this.shape.setTransform(31.8,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AheA6QgOgCgGgIQgHgFgCgOQgCgIAAgVIABgUQgBgFADgHQADgMAJgHQAKgGAXgCIAhAAQAqAAAKABQAPADAGAIQAHAJABAMQACAKAAARQAAAbgFAKQgEAKgJAFQgIAEgFABIgVACIgdAAQgqAAgKgCgAhHgdQgLABgDAHQgCAFAAAQQAAAQACAGQADAGAMACQAHABAUAAQAbAAAHgCQAHgBACgFQACgFgBgIIABgKQAAgQgCgGQAAgEgDgBQgFgDgHAAIgbAAQgZAAgEABgAkSA7IAAh1IAlAAIAABXIBkAAIAAAegACyA7IgVhJIgXBJIgzAAIgsh2IAoAAIAdBRIAahRIAuAAIAZBRIAdhRIAoAAIgtB2g");
	this.shape_1.setTransform(97.6,21.9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1E0DF").s().p("AAABlIk8A5IAAkCIE8g5IE9A5IAAECg");
	this.shape_2.setTransform(31.8,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B6B6A").s().p("Ak8BlIAAkCIE8A5IE9g5IAAECIk9A5g");
	this.shape_3.setTransform(97.2,21.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129,37.7);


(lib.gbcurvecopy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("A3bXWMAAAgrpQVQmCZPF9IAXAFMAAAArpg");
	this.shape.setTransform(150,120);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-29.4,300,299);


(lib.gbcurve = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bXWMAAAgrpQVQmCZPF9IAXAFMAAAArpg");
	this.shape.setTransform(150,120);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-29.4,300,299);


(lib.bgimg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._bg = function() {
	this.initialize();

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._clicktag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// t3c
	this.instance = new lib.t3c();
	this.instance.setTransform(147.7,152.9,1,1,0,0,0,98.7,13.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:127.7,alpha:1},7,cjs.Ease.get(0.9)).wait(30));

	// t3b
	this.instance_1 = new lib.t3b();
	this.instance_1.setTransform(145.2,127.9,1,1,0,0,0,96.2,13.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:125.2,alpha:1},7,cjs.Ease.get(0.9)).wait(35));

	// t3a
	this.instance_2 = new lib.t3a();
	this.instance_2.setTransform(111.8,102.9,1,1,0,0,0,62.8,13.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:91.8,alpha:1},7,cjs.Ease.get(0.9)).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49,96,122,17.5);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
		exportRoot.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// t2.2
	this.instance = new lib.t22();
	this.instance.setTransform(151.5,191.1,0.537,0.537,0,0,0,0,11.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(1).to({regX:-1.2,regY:11.2,scaleX:0.7,scaleY:0.7,x:150.6,y:191.2,alpha:0.344},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:150.5,alpha:0.616},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:150.4,alpha:0.816},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:150.3,alpha:0.944},0).wait(1).to({regX:0,regY:11.1,scaleX:1,scaleY:1,x:151.5,y:191.1,alpha:1},0).wait(12));

	// Layer 2
	this.instance_1 = new lib._300x250_mask();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(37));

	// %
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbHWQgdgcgBgwIAAhZQABg1AdgdQAfgfA3AAQA3AAAfAfQAfAdAAA1IAABZQAAAwgfAcQgfAcg3ABQg3gBgfgcgABZEdQgKAKgBAPIAABGQABAPAKAKQAKAKAOABQAOgBAKgKQAKgKABgPIAAhGQgBgPgKgKQgKgKgOgBQgOABgKAKgAjUHrIFPvVIBbAAIlPPVgAjFjbQgfgdgBgwIAAhZQABg0AfgeQAfgeA3gBQA2ABAfAeQAdAeABA0IAABZQgBAwgdAdQgfAcg2AAQg3AAgfgcgAiHmUQgLAKAAAPIAABGQAAAPALAKQAKAKAOABQANgBAKgKQAKgKABgPIAAhGQgBgPgKgKQgKgKgNgBQgOABgKAKg");
	this.shape.setTransform(174.5,118.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(16).to({x:199.5},0).wait(8).to({x:224.5},0).wait(20));

	// 1
	this.instance_2 = new lib.t2roll();
	this.instance_2.setTransform(176.6,799.6,1,1,0,0,0,71,640);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({y:675.6},2).wait(18));

	// 10
	this.instance_3 = new lib.t2roll();
	this.instance_3.setTransform(150.6,676.6,1,1,0,0,0,71,640);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({y:-562.4},7).wait(1).to({x:126.6},0).wait(20));

	// 100
	this.instance_4 = new lib.t2roll();
	this.instance_4.setTransform(125.6,676.6,1,1,0,0,0,71,640);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(7).to({y:-809.4},8).wait(1).to({x:100.6},0).wait(8).to({x:75.6},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// t1d
	this.instance = new lib.t1d();
	this.instance.setTransform(0,65.1,1,1,0,0,0,0,11.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1},7).wait(32));

	// t1c
	this.instance_1 = new lib.t1c();
	this.instance_1.setTransform(0,47.1,1,1,0,0,0,0,11.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({alpha:1},7).wait(34));

	// t1b
	this.instance_2 = new lib.t1b();
	this.instance_2.setTransform(0,29.1,1,1,0,0,0,0,11.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({alpha:1},7).wait(36));

	// t1a
	this.instance_3 = new lib.t1a();
	this.instance_3.setTransform(0,11.1,1,1,0,0,0,0,11.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({alpha:1},7).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{on:1,off:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(6).call(this.frame_12).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F35").s().p("AikAeIAMgPQAPANAMABQAFgBADgCQAEgCAAgEQAAgEgEgDQgDgCgKgCQgQgFgHgEQgIgGAAgNQAAgNAKgHQAJgGAOgBQAJABAKADQAJADAGAGIgKAOQgMgIgMgBQgGAAgCADQgDACAAAEQAAAEADACQAEADANADQAMADAHAFQAIAGAAAMQAAAMgJAIQgKAHgPABQgVgBgRgQgAnmAhQgNgNAAgUQAAgSAOgOQANgOAVAAQATAAAOAOIgLAPQgFgGgGgBQgFgCgFAAQgMgBgIAIQgIAIAAALQAAAMAIAIQAHAIALAAQAKAAAHgEIAAgYIAUAAIAAAfQgNAPgYABQgUAAgOgOgAGiAuIAAhZIAgAAQAYAAANALQANAMAAAUQAAAVgNAMQgMANgaAAgAG2AcIANAAQAOAAAHgIQAIgHAAgNQAAgLgIgIQgHgGgQAAIgLAAgAFCAuIAAhZIBCAAIAAASIgtAAIAAATIApAAIAAAPIgpAAIAAATIAvAAIAAASgAD8AuIAAhIIgaAAIAAgRIBIAAIAAARIgaAAIAABIgAC4AuIgVgdIgNAAIAAAdIgVAAIAAhZIAiAAQAWgBAJAIQAJAHAAAQQAAATgRAHIAWAhgACWAAIAPAAQAJAAAEgDQAEgDAAgHQAAgHgEgDQgEgDgJAAIgPAAgABXAuIgJgUIglAAIgJAUIgWAAIAohZIATAAIAnBZgAAwAIIAXAAIgLgYgAguAuIAAhIIgaAAIAAgRIBIAAIAAARIgbAAIAABIgAkRAuIAAhIIgaAAIAAgRIBIAAIAAARIgaAAIAABIgAmDAuIAAhZIBCAAIAAASIgtAAIAAATIApAAIAAAPIgpAAIAAATIAvAAIAAASg");
	this.shape.setTransform(148.7,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(13));

	// Layer 3
	this.instance = new lib.gbcurvecopy();
	this.instance.setTransform(150,164.3,1,1,0,0,0,150,134.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).to({alpha:0},6).wait(1));

	// gb-curve
	this.instance_1 = new lib.gbcurve();
	this.instance_1.setTransform(150,164.3,1,1,0,0,0,150,134.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,299);


// stage content:
(lib.highlow_mrec1b_flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(20);
		
		this.loopNumber = 0 ;
		
		// CLICKTHROUGH
		this.clickTagBtn.addEventListener("click", function () {
			console.log("clickthrough");
			window.open(window.clickTAG);
		});
		
		// CTA
		this.clickTagBtn.addEventListener("mouseover", function () {
			exportRoot.bt.gotoAndPlay("on");
		});
		
		this.clickTagBtn.addEventListener("mouseout", function () {
			exportRoot.bt.gotoAndPlay("off");
		});
	}
	this.frame_64 = function() {
		this.stop();
	}
	this.frame_208 = function() {
		if(this.loopNumber >= 1){
			console.log("STOP BANNER");
			this.stop();
		} else {
			this.loopNumber++;
			console.log("RESTART: " + this.loopNumber);
		}
	}
	this.frame_215 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(64).call(this.frame_64).wait(144).call(this.frame_208).wait(7).call(this.frame_215).wait(1));

	// clickTagBtn
	this.clickTagBtn = new lib._clicktag();
	this.clickTagBtn.setTransform(0,0,1.875,0.417);
	new cjs.ButtonHelper(this.clickTagBtn, 0, 1, 2, false, new lib._clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTagBtn).wait(216));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(216));

	// bt
	this.bt = new lib.btn();
	this.bt.setTransform(150,404.6,1,1,0,0,0,150,149.5);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(167).to({y:324.6,alpha:0},0).to({alpha:1},6).wait(36).to({y:404.6},6,cjs.Ease.get(-0.9)).wait(1));

	// t6
	this.instance = new lib.t6();
	this.instance.setTransform(150.1,130.1,1,1,0,0,0,0,12.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(163).to({_off:false},0).to({alpha:1},6).wait(40).to({y:-19.9},6,cjs.Ease.get(-0.9)).wait(1));

	// t5
	this.instance_1 = new lib.t5();
	this.instance_1.setTransform(151.3,107.1,1,1,0,0,0,0,11.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).to({alpha:1},6).wait(43).to({y:-42.9},6,cjs.Ease.get(-0.9)).wait(1));

	// web-img
	this.instance_2 = new lib.webimg();
	this.instance_2.setTransform(429,167,1,1,0,0,0,132,70);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121).to({_off:false},0).to({x:149},7,cjs.Ease.get(1)).wait(27).to({x:-131},6,cjs.Ease.get(-1)).to({_off:true},1).wait(54));

	// t4
	this.instance_3 = new lib.t3();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({_off:false},0).wait(45).to({y:349},8,cjs.Ease.get(0.9)).to({_off:true},1).wait(90));

	// bg
	this.instance_4 = new lib.gbcurve();
	this.instance_4.setTransform(150,115.3,0.967,1.349,0,0,0,150,134.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1},0).wait(46).to({y:339.3},8,cjs.Ease.get(0.9)).to({_off:true},48).wait(43));

	// logo
	this.instance_5 = new lib.logo_mc();
	this.instance_5.setTransform(148.5,54.8,1,1,0,0,0,64.5,18.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(117).to({_off:false},0).wait(92).to({y:-95.2},6,cjs.Ease.get(-0.9)).wait(1));

	// t2
	this.instance_6 = new lib.t2();
	this.instance_6.setTransform(150,375,1,1,0,0,0,150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46).to({_off:false},0).to({y:250},4,cjs.Ease.get(-0.9)).to({y:125},4,cjs.Ease.get(0.9)).wait(11).to({scaleX:8.77,scaleY:8.77,x:250,y:124.9},4,cjs.Ease.get(-1)).to({_off:true},1).wait(146));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.setTransform(151.5,129.5,1,1,0,0,0,0,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46).to({y:9.5},4,cjs.Ease.get(-0.9)).to({y:-110.5},4,cjs.Ease.get(0.9)).to({_off:true},1).wait(161));

	// bg
	this.instance_8 = new lib.bgimg();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(216));

	// bg
	this.instance_9 = new lib._bg();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(216));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,302,555);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;