(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 18,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/grap.png", id:"grap"}
	]
};



// symbols:



(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.grap = function() {
	this.initialize(img.grap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,47);


(lib.t3 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al1BWQARgFATgIQAMgFAJgLQALgKADgLQACgKACgNIAAgaIAAhJIAYAAIAABQQAAAWgFASQgDATgJAMQgJANgSALQgSAKgaAIQgEgJgHgMgAplBWQARgGAUgKQAJgGAKgMQAGgHAEgPQAFgSABgaIhaAAIAAgVIBaAAIAAg5IAZAAIAAA5IBNAAIAAAVIhNAAQgBASgCAOQgCAOgEAKQgDAJgFAJQgGAJgJAIQgIAJgOAHQgNAIgSAGQgHgQgFgFgAMkBrIAAgJIhgAAIAAgTIBgAAIAAglIhgAAIAAgTIBgAAIAAgfIhgAAIAAgUIB2AAIAACHgArjBpIAAhrQgWAPgUAMQgbAPgOAGQgEgMgIgJQAhgOAYgOIAXgQIAZgVQAMgKAMgNIAYgbIAUARIg1A0IAAB+gAECBcIgDgEIgGgGIAcgKQAMgFAJgFQAJgEAIgHIAQgOQAIgIASgbQAHgJANgjIiMAAIAAgVICVAAIACgCIARAPIgPAoQgIAPgHAOQgJANgJAMQgLALgLAKQgVAPgLAHQgaAMgOAFgABdBaIgGgKIAbAAIABgEIAAhLQgWAagSAPQgMAKgOAJQgPAKgRAJQgHgMgJgIQAVgLAPgKQARgKAMgKQANgKAKgKQALgLAIgMIheAAIAAgUIBlAAIAAgvIAXAAIAAAvIA/AAIAAAUIg/AAIAABrQAAAKgFAEQgEACgJACIgZADgAN3BMQAUgHAZgLQAUgLAYgPQAUgPARgRQAOgMAWgdIAIAJQACAEAHAEQgjAngKAKQggAagUANQgrAZgbAMgAHeBNQAlgNAXgLQAegRAVgSIAagXQAMgMAKgOQAKANAGAFQgQASgRAQQgRARgUAOQgQAMgXAMQgYANgeAMgAwpBJIAagiQAIgLANgbQAJgVAJgkIAZAIQgIAZgIAVQgIATgJAQQgQAegYAaQgFgIgMgIgAuBAlQgGgPgJgRIgOgXIgUghIATgKQAUAeAVAkQAMAYAEALIALAgIgYAKQgHgcgHgRgAmHAjIAAhwIAXAAIAABwgAjYAQIAAgVIC2AAIAAAVgAHUgGIAIgSIAcAKQAMAFAJAFIgNASgAOKgxIgSgNIAOgSIAcASQASAOAHAIIgPATgAuPg7IAKgLIANALQAIAHAFAGIgLALgAHshCIALgSQAfAQAPAKIgMASQgegSgPgIgAt7hOIALgMIAZAWIgLAMQgEgFgVgRgAGTg7QgFgBgDgEQgEgEgBgEQgCgFAAgFQAAgFACgEIAFgIQADgEAFgBQAEgCAFAAQAFAAAFACQAEABAEAEIAGAIQABAEAAAFQAAAFgBAFQgCAEgEAEQgEAEgEABQgFACgFAAQgFAAgEgCgAGUhbQgFAFABAEQgBAFAFAEQADAEAFAAQAFAAAEgEQADgEAAgFQAAgFgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape.setTransform(0,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEdB1QgKgDgIgEIAGgQQAGADAIACQAJACAIAAQAQAAAHgHQAIgIAAgPIAAgNQgGAHgIAEQgJAEgLAAQgWAAgNgRQgNgPAAgaIAAgDQAAgbANgTQANgRAXgBQALAAAJAGQAJAEAGAJIACgQIASAAIAAB4QAAAXgOANQgNAMgaAAQgJAAgKgCgAEbgUQgHANAAATIAAADQAAARAHAMQAIALAQAAQAKAAAHgEQAGgFAFgJIAAg2QgEgHgHgEQgHgGgKAAQgQAAgIAOgAp4BDIAcAAQAGAAABgEQACgFACgOIADgnIg0AAIgDAMIgXgDIAPhIIA+AAIAAgfIhJAAIAAgSIBfAAIAABDIhAAAIgGAdIBJAAQgBAYgCAUIgFAfQgEANgDACQgEADgLADQgIABgVACQgDgOgEgHgAtWBXIAAgtIhEANIgDgTIASgCIAAh8IgRAAIAAgRIBvAAIAAARIgVAAIAACxgAt3AdIAhgFIAAgZIghAAgAt3gTIAhAAIAAgYIghAAgAt3g+IAhAAIAAgcIghAAgAiPBOQAAgFgDgKQAWABARgCQARgBAKgDQALgEAIgFQAHgEAFgHIAFgJQACgFAAgFQAAgGgCgFQgCgFgFgDQgJgIgSAAQgJAAgKACQgLADgKADQgUALgSAWIgRgIIANhfIAYAIIgKAiQgEAOgBAOQAQgIAagMIAQgFQAJgBAJAAQANAAAKADQAKAEAIAFQAHAIAEAGQAEAIAAAKQAAAOgGALQgGALgLAIQgPALgZAGQgZAFgkACgAtABEQARgKAKgHQAGgGAOgQIgJgVIgGgRQgDgMgDgnIgRAAIAAgTIBOAAIAEgBIANAIIgIAnQgDAOgGARQgHANgJASQAIALAMAHIAbASQgJAJgFAJQgRgKgHgGIgWgVQgJALgLAKQgLAJgOAKQgFgNgIgFgAsPgSQADAMAHAOIAMgbQAFgVADgUIgiAAQABAcADAOgAlNBQQgJgDgHgFQgGgEgDgFQgDgFAAgGQAAgGADgGQADgGAGgFQAFgEAIgCQAIgDALAAQALABAOAEIgDgnIACgWIAWABQgDAPAAANIACAkIAQAFIAHAEIAJAEIASAKIgMAVQgdgSgJgEQgBAIgCAGQgCAHgEACQgGAFgIACQgIACgKAAQgLAAgJgDgAlPAqQgGAEAAAFQAAADADAFQABACAHADQAHADAHAAQAHAAAFgCQAFgBADgEQACgCABgFIABgLQgPgFgMAAQgJAAgHAFgAoEBTIAAjEIAXAAIAADEgAKNA3QgPgRAAgbIAAgDQAAgZAPgRQAOgRAZgBQAaAAAOASQAPARAAAZIAAADQAAAcgPAQQgOASgZAAQgaAAgOgSgAKcgVQgIANAAAQIAAADQAAAUAIAMQAJAMAQAAQAPAAAJgMQAIgMAAgUIAAgDQAAgQgIgNQgJgNgQAAQgPAAgJANgANpBHIgchdIgBAAIgFAVIgXBIIgSAAIgjh4IAWAAIAXBaIAAAAIADgPIAZhLIARAAIAZBLIADARIABAAIAWhcIAWAAIgjB4gAILBHIAAiiIAXAAIAACQIBNAAIAAASgAHSBHIAAhLQAAgPgHgHQgGgIgNAAQgJABgIAEQgHAFgFAHIAABYIgWAAIAAitIAWAAIAABFQAGgIAJgFQAKgGALAAQATABALAMQALALAAAZIAABKgADLBHIAAh4IAWAAIAAB4gACOBHIAAhHIhPAAIAABHIgWAAIAAiiIAWAAIAABKIBPAAIAAhKIAXAAIAACigAmpA1QAPgbAMgaQAMgaAJgaQgUABgPgBIAAgUIApAAQAJgaADgNIAXAGIgKAfIAfgGIABAUIgoAGIgZBBQgPAhgMAUgAkMgvIgjgJIAEgTQAYADAOAFIAkANIgJAUQgTgJgPgEgAhvhUIgjgPIAJgTQAVAJAKADQAWAIAUAEIgIAVIgngLgADLhQIAAgWIAWAAIAAAWg");
	this.shape_1.setTransform(0,46.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.1,0,234.2,64.5);


(lib.t2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(0,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBAAIADAAIgDABg");
	this.shape_2.setTransform(-4,-81.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-174.6,-82.1,349.2,170.1);


(lib.t1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABIBSIAVAAIADgBIABgCIAAhDIh+AAIAABdIgVAAIAAi/ICoAAIAACnQAAAHgBAFQgCAEgDADQgEACgIABIgVADQgBgKgGgOgAApgFIA4AAIAAg9Ig4AAgAgdgFIAyAAIAAg9IgyAAgAE4BFQgVgcgHgOQgFgJgEgLIgIgZIgKAZIgNAXIgMATIgRAUQgXAUgTAOQgFgLgKgKQAmgWAVgdQALgPAIgRQAIgVAGgZIAMAEQgCgPAAgMIg6AAIAAgVIBRAAQAAApAFAYQAJAbAGANIALATIAQAUQAMAOAXASIgKAJIgHAKQgegbgGgIgAGIBkIAAgTIBWAAIAAg1IhMAAIAAgRIBMAAIAAgUIgtAAIAAgLQgVARgOAHIgIgLIgGgHQAcgPAZgXQAZgXAWgeIAWALIgEAFQAKAMALAJQAKALALAGQANALAOAIQAOAJAOAHIgOARQgXgLgMgJIAAAKIgzAAIAAAUIBRAAIAAARIhRAAIAAA1IAnAAIgPgKQAGgKAMgbIAUALQgMAYgIAMIAxAAIAAATgAIZgcIgwguIguAuIBeAAgAjJBIQgOgQAAgfIAAglQAAgfAOgRQAOgRAYAAQAZAAAOARQAOARAAAfIAAAlQAAAfgOAQQgOARgYABQgYgBgPgRgAi5gxQgHALAAAVIAAAuQAAAVAHALQAIALAPAAQAOAAAIgLQAHgLAAgVIAAguQAAgVgHgLQgIgLgPAAQgOAAgIALgAlKBIQgOgQAAgfIAAglQAAgfAOgRQAOgRAYAAQAYAAAOARQAOARAAAfIAAAlQAAAfgOAQQgOARgYABQgYgBgOgRgAk6gxQgIALAAAVIAAAuQAAAVAIALQAIALAOAAQAPAAAHgLQAIgLAAgVIAAguQAAgVgIgLQgHgLgPAAQgPAAgHALgAnMBIQgOgQAAgfIAAglQAAgfAOgRQAOgRAYAAQAZAAAOARQAOARAAAfIAAAlQAAAfgOAQQgOARgYABQgYgBgPgRgAm8gxQgHALAAAVIAAAuQAAAVAHALQAIALAPAAQAOAAAIgLQAHgLAAgVIAAguQAAgVgHgLQgIgLgPAAQgOAAgIALgApIBOQgOgLAAgWIABgBIAUAAQAAAOAHAGQAIAIAMAAQAOAAAIgKQAIgKAAgRQAAgPgIgKQgIgKgOAAQgNAAgGADQgFAEgDAIIgTgCIAKhYIBSAAIAAAUIg/AAIgGAuQAFgDAHgDQAGgDAIAAQAXgBANAPQANANAAAaQAAAYgNAPQgOAPgZABQgVAAgNgMgAGkAtIARgJIAUAeIgTAJQgLgVgHgJg");
	this.shape.setTransform(0,16.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,0,128.1,37.2);


(lib.note_10 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ABAAtIgGgEQgDgCgCgEQgBgEAAgEIAAg1QAAgEABgEQACgEADgCIAGgEQADgCAEAAQAEAAAEACQAEABACADQADACACAEQABAEAAAEIAAA1QAAAEgBAEQgCAEgDACQgCADgEABQgEACgEAAQgEAAgDgCgABDgeQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAA1QAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQADAAACgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAg1QAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgDAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABgAAQAtIgGgEQgDgCgCgEQgBgEAAgEIAAg1QAAgEABgEQACgEADgCIAGgEQADgCAEAAQAEAAAEACQAEABACADQADACACAEQABAEAAAEIAAA1QAAAEgBAEQgCAEgDACQgCADgEABQgEACgEAAQgEAAgDgCgAATgeQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAA1QAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQADAAACgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAg1QAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgDAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABgAgeAtIgGgEQgDgCgCgEQgBgEAAgEIAAg1QAAgEABgEQACgEADgCIAGgEQADgCAEAAQAEAAAEACQAEABACADQADACACAEQABAEAAAEIAAA1QAAAEgBAEQgCAEgDACQgCADgEABQgEACgEAAQgEAAgDgCgAgbgeQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAA1QAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQADAAACgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAg1QAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgDAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABgAhOAtIgGgEQgDgCgCgEQgBgEAAgEIAAgEIANAAIAAADQAAADACACQACACADAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQACgBAAgEIAAgVQAAgDgCgCQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgDAAgCAAIgCADIgMAAIAAgwIAmAAIAAANIgaAAIAAAZIAFgDQADgCADAAIAGABIAFAEQACACABADIABAFIAAAYQAAAEgBAEQgCAEgDACQgCADgEABQgEACgEAAQgEAAgDgCg");
	this.shape.setTransform(52.7,20.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB5A35").s().p("AiCCDQg2g3gBhMQABhMA2g2QA3g3BLAAQBMAAA3A3QA2A2AABMQAABNg2A2Qg3A3hMAAQhLAAg3g3g");
	this.shape_1.setTransform(52.6,20.5,0.66,0.66);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDECEC").s().p("AoaD+QgKgYgUgQQgUgRgagFIAAl/QAagFAUgRQAUgQAKgYIQ1AAQAJAYAVARQATASAaAFIAAF9QgYAFgVARQgUAQgKAYg");
	this.shape_2.setTransform(52.6,20.5,0.66,0.66);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DB5A35").s().p("AqdE1IAApqIU7AAIAAJqg");
	this.shape_3.setTransform(52.7,20.5,0.66,0.66);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.5,0,88.5,41);


(lib.m2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ABAAtIgGgEQgDgCgCgEQgBgEAAgEIAAg1QAAgEABgEQACgEADgCIAGgEQADgCAEAAQAEAAAEACQAEABACADQADACACAEQABAEAAAEIAAA1QAAAEgBAEQgCAEgDACQgCADgEABQgEACgEAAQgEAAgDgCgABDgeQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIAAA1QAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQADAAACgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAg1QAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgDAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABgAAQAtIgGgEQgDgCgCgEQgBgEAAgEIAAg1QAAgEABgEQACgEADgCIAGgEQADgCAEAAQAEAAAEACQAEABACADQADACACAEQABAEAAAEIAAA1QAAAEgBAEQgCAEgDACQgCADgEABQgEACgEAAQgEAAgDgCgAATgeQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIAAA1QAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQADAAACgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAg1QAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgDAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABgAgeAtIgGgEQgDgCgCgEQgBgEAAgEIAAg1QAAgEABgEQACgEADgCIAGgEQADgCAEAAQAEAAAEACQAEABACADQADACACAEQABAEAAAEIAAA1QAAAEgBAEQgCAEgDACQgCADgEABQgEACgEAAQgEAAgDgCgAgbgeQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIAAA1QAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQADAAACgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAg1QAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgDAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABgAhOAtIgGgEQgDgCgCgEQgBgEAAgEIAAgEIANAAIAAADQAAADACACQACACADAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBAAgEIAAgVQAAgDgCgCQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgDAAgCAAIgCADIgMAAIAAgwIAmAAIAAANIgaAAIAAAZIAFgDQADgCADAAIAGABIAFAEQACACABADIABAFIAAAYQAAAEgBAEQgCAEgDACQgCADgEABQgEACgEAAQgEAAgDgCg");
	this.shape.setTransform(44.3,20.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB5A35").s().p("AiCCDQg3g2ABhNQgBhMA3g2QA3g3BLAAQBNAAA2A3QA3A2gBBMQABBNg3A2Qg2A3hNAAQhLAAg3g3g");
	this.shape_1.setTransform(44.2,20.5,0.66,0.66);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDECEC").s().p("AoaD+QgKgYgUgQQgUgRgagFIAAl/QAagFAUgRQAUgQAKgYIQ0AAQAKAYAUARQAVASAaAFIAAF9QgaAFgUARQgUAQgKAYg");
	this.shape_2.setTransform(44.2,20.5,0.66,0.66);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DB5A35").s().p("AqdE1IAAppIU7AAIAAJpg");
	this.shape_3.setTransform(44.2,20.5,0.66,0.66);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,88.5,41);


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


(lib.laptop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1C1C0").s().p("AhbAHQgEAAAAgFIAAgIIC/AAIAAAIQAAAFgEAAg");
	this.shape.setTransform(0,109.2,2.478,2.53);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0D0CF").s().p("AnHAOIAAgbIOOAAIAAAbg");
	this.shape_1.setTransform(0,111,2.478,2.53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1C1C0").s().p("AmhAGIgmgLIOOAAIgmALg");
	this.shape_2.setTransform(0,116.4,2.478,2.53);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4E2E2").s().p("AiqinQAAgMAJgIQAJgJALAAIE4AAIgbAwIkIAAIAAEkIgyA1g");
	this.shape_3.setTransform(-49.9,50,2.478,2.53);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#303238").s().p("AlBCkIAAlHIKEAAIAAFHg");
	this.shape_4.setTransform(0,53.7,2.478,2.53);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C1C1C0").s().p("AgFAAQAAgBABgDQACgCACAAQAGAAAAAGQAAAGgGABQgGgBABgGg");
	this.shape_5.setTransform(0,5.4,2.478,2.53);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0DDDD").s().p("Al0DcIAAmaQABgMAIgIQAJgJAMAAIKtAAQAMAAAJAJQAIAIAAAMIAAGag");
	this.shape_6.setTransform(0,55.8,2.478,2.53);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113,0,226,118.2);


(lib.lapshad = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.102)").s().p("A+O1KIAhgmIETgWIYfhOIBdszIBEijIY2MDMADzAqEIh5XOg");
	this.shape.setTransform(193.6,247.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,387.2,495.1);


(lib.hand2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B1B1B1").s().p("AAYA4QguABgfgTQgPgQAAgWQAAgbAVgPQAYgSAuADQAbABAKAQQAJANAAAbQAAAvgaALg");
	this.shape.setTransform(9,26.9,0.66,0.66);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#656566").s().p("AElAFIlFB1Il3gsIk9gsQgwACgegTQgggSgDgmQgDgiAVgXQAagcA3gHQAhgDDGABQC9ABADgBQEah1E8h1IIrExIhuGug");
	this.shape_1.setTransform(58.5,28.3,0.66,0.66);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#656566").s().p("AiGCfIk9gsQgwABgfgTQgggUgDglQgCgiAVgVQAZgdA4gGQAggEDGACQC9ABADgCQDahbDagmQBsgTBBAAIAAEeIlHB1g");
	this.shape_2.setTransform(40.5,23,0.66,0.66);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#575858").s().p("AjgA2QATgVAUgIIEihwQAUgIAeAAQAegBAVAHIAhAiQAaAoghAfQgiAijiAbIjdAUQAGgWATgVg");
	this.shape_3.setTransform(22.2,18.3,0.66,0.66);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#656566").s().p("ApMCwIA+jFQAGgWATgVQATgUAVgJIEjhxQAVgJAeAAQAdgBAWAIIKHA1IAKF0g");
	this.shape_4.setTransform(38.9,14.3,0.66,0.66);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,113.9,52.6);


(lib.hand = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B1B1B1").s().p("Ag4A6QgOgMADgrQADguAJgLQAPgSAxAHQAdAFAOAMQATARgCAfQgCAegTATQgPAPgUACIgZACQghAAgLgKg");
	this.shape.setTransform(140.6,72.4,0.66,0.66);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#656566").s().p("AhMB4Qg7gCg/gGIBAjnQAZgBAXABQCBAEBFAVQA2ARATAfQALARADAiQADAngfAcQgvAohyAHQgTABgdAAIgmAAg");
	this.shape_1.setTransform(133.5,71.7,0.66,0.66);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AizDVQA8iuBjiOQA/heBDhAIAAgBIBGAjQgrAag3BLQhsCUg3Dxg");
	this.shape_2.setTransform(49.6,50.7,0.66,0.66);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#303238").s().p("Am4EiIAAtsQL1GpB8A7IltKxg");
	this.shape_3.setTransform(29.1,38.8,0.66,0.66);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#656566").s().p("AiuFyQiOgciLhlQiBhdjuhuQgXgLAJhIQAIhFAdhVQAfhZAjgyQApg5AeATQB7BKBWAiQBcAkBtAPQBPAKDvghQDyghA5AHQAVACAMAHQARALA/AwIB7BeQBIA1AVASQAuAnAMAgQANAlgNA7QA2ARAUAfQALARADAkQADAnggAcQguAohzAHQghACg3gBQg6gChAgGIh1gJQgqABiEAbQhqAVhZAAQhEAAg8gMgAEoBdQAuALApAGQAPACAlAAIBFgDQgKgPgOgNIgLgJQgjAKhjgKQgwgFg7gJIgxgJQAZAXBcAVg");
	this.shape_4.setTransform(91.2,56.6,0.66,0.66);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#575858").s().p("AjIEAQgpgCgNguQgEgPADgSQgoAKgWACQglACgWgPQgTgNgFgUIgLgTIgjhJIB/ibIEaiWIAvAJQA7AJAwAFQBjAKAjgKIALAxQAOA1AKAPIBYAdIBIBUQABA0gBADIgOBGQgtBFglAjQgxAugzgjQgyghANg8QADgNAGgOIgFgjQADAcgGAFIABAAIguAXQgJAFgfAXQgYARgTAGQgZAIg2AGQgzAGgZAIIhBAZQgmAPgZAAIgDgBg");
	this.shape_5.setTransform(105.6,71.5,0.66,0.66);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146.7,88.5);


(lib.grap_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.grap();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153,47);


(lib.buzz = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape.setTransform(89.7,160,0.384,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_1.setTransform(89.7,158,0.384,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_2.setTransform(89.7,156,0.384,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_3.setTransform(89.7,154,0.384,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_4.setTransform(89.7,152,0.384,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_5.setTransform(89.7,150,0.384,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_6.setTransform(89.7,148,0.384,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_7.setTransform(89.7,146,0.384,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_8.setTransform(89.7,144,0.384,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_9.setTransform(89.7,142,0.384,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_10.setTransform(89.7,140,0.384,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_11.setTransform(89.7,138,0.384,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_12.setTransform(89.7,136,0.384,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_13.setTransform(89.7,134,0.384,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_14.setTransform(89.7,132,0.384,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_15.setTransform(89.7,130,0.384,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_16.setTransform(89.7,128,0.384,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_17.setTransform(89.7,126,0.384,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_18.setTransform(89.7,124,0.384,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_19.setTransform(89.7,122,0.384,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_20.setTransform(89.7,120,0.384,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_21.setTransform(89.7,118,0.384,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_22.setTransform(89.7,116,0.384,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_23.setTransform(89.7,114,0.384,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_24.setTransform(89.7,112,0.384,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_25.setTransform(89.7,110,0.384,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_26.setTransform(89.7,108,0.384,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_27.setTransform(89.7,106,0.384,1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_28.setTransform(89.7,104,0.384,1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_29.setTransform(89.7,102,0.384,1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_30.setTransform(89.7,100,0.384,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_31.setTransform(89.7,98,0.384,1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_32.setTransform(89.7,96,0.384,1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_33.setTransform(89.7,94,0.384,1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_34.setTransform(89.7,92,0.384,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_35.setTransform(89.7,90,0.384,1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_36.setTransform(89.7,88,0.384,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_37.setTransform(89.7,86,0.384,1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_38.setTransform(89.7,84,0.384,1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_39.setTransform(89.7,82,0.384,1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_40.setTransform(89.7,80,0.384,1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_41.setTransform(89.7,78,0.384,1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_42.setTransform(89.7,76,0.384,1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_43.setTransform(89.7,74,0.384,1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_44.setTransform(89.7,72,0.384,1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_45.setTransform(89.7,70,0.384,1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_46.setTransform(89.7,68,0.384,1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_47.setTransform(89.7,66,0.384,1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_48.setTransform(89.7,64,0.384,1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_49.setTransform(89.7,62,0.384,1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_50.setTransform(89.7,60,0.384,1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_51.setTransform(89.7,58,0.384,1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_52.setTransform(89.7,56,0.384,1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_53.setTransform(89.7,54,0.384,1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_54.setTransform(89.7,52,0.384,1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_55.setTransform(89.7,50,0.384,1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_56.setTransform(89.7,48,0.384,1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_57.setTransform(89.7,46,0.384,1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_58.setTransform(89.7,44,0.384,1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_59.setTransform(89.7,42,0.384,1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_60.setTransform(89.7,40,0.384,1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_61.setTransform(89.7,38,0.384,1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_62.setTransform(89.7,36,0.384,1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_63.setTransform(89.7,34,0.384,1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_64.setTransform(89.7,32,0.384,1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_65.setTransform(89.7,30,0.384,1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_66.setTransform(89.7,28,0.384,1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_67.setTransform(89.7,26,0.384,1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_68.setTransform(89.7,24,0.384,1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_69.setTransform(89.7,22,0.384,1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_70.setTransform(89.7,20,0.384,1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_71.setTransform(89.7,18,0.384,1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_72.setTransform(89.7,16,0.384,1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_73.setTransform(89.7,14,0.384,1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_74.setTransform(89.7,12,0.384,1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_75.setTransform(89.7,10,0.384,1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_76.setTransform(89.7,8,0.384,1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_77.setTransform(89.7,6,0.384,1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_78.setTransform(89.7,4,0.384,1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_79.setTransform(89.7,2,0.384,1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(255,255,255,0.498)").p("EgkfAAAMBI/AAA");
	this.shape_80.setTransform(89.7,0,0.384,1);

	this.addChild(this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,181.4,162);


(lib.btnbg2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("A0TDvIAAneMAonAAAIAAHeg");
	this.shape.setTransform(130,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCD2A").s().p("A0TAPIAAgdMAonAAAIAAAdg");
	this.shape_1.setTransform(130,49.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,51);


(lib.bg2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bgo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE683A").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._50 = function() {
	this.initialize();

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCCD2A").s().p("AgiCLQgLgEgIgIQgJgIgEgLQgGgMAAgOIAAgMIAqAAIAAAKQAAALAFAGQAGAFAJAAQAJAAAEgFQAEgGAAgKIAAhDQAAgIgFgGQgDgEgJAAQgJAAgGAEIgFAKIgkAAIAAiYIByAAIAAAmIhOAAIAABNQAFgGAJgDQAJgEAIAAQALAAAJADQAIAEAGAGQAHAGADAKQADAJAAAKIAABKQAAAOgFAMQgEALgJAIQgJAIgLAEQgKAEgKAAQgMAAgMgEgAC+CNIgvh/IgVAqIAABVIgqAAIAAkbIAqAAIAACCIAAAAIA8iCIAoAAIg3ByIBCCpgAiyCNIAAhFIguAAIAAgaIAuAAIAAgUIguAAIAAgaIAoAAIgwiOIApAAIAfBxIABAAIAghxIApAAIgwCOIAoAAIAAAaIguAAIAAAUIAuAAIAAAaIguAAIAABFg");
	this.shape.setTransform(46.6,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747577").s().p("AgGA+IAAg5IgzAAIAAgLIAzAAIAAg3IAMAAIAAA3IA0AAIAAALIg0AAIAAA5g");
	this.shape_1.setTransform(8.8,25.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.9,51.5);


(lib._10 = function() {
	this.initialize();

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiCLQgLgEgIgIQgJgIgEgLQgGgMAAgOIAAgMIAqAAIAAAKQAAALAFAGQAGAFAJAAQAJAAAEgFQAEgGAAgKIAAhDQABgIgGgGQgEgEgIAAQgJAAgGAEIgFAKIgkAAIAAiYIByAAIAAAmIhOAAIAABNQAFgGAJgDQAJgEAJAAQAKAAAJADQAIAEAGAGQAGAGAEAKQADAJAAAKIAABKQAAAOgFAMQgEALgJAIQgJAIgKAEQgLAEgLAAQgLAAgMgEgAC+CNIgvh/IgVAqIAABVIgqAAIAAkbIAqAAIAACCIAAAAIA8iCIAoAAIg3ByIBCCpgAiyCNIAAhFIguAAIAAgaIAuAAIAAgUIguAAIAAgaIAoAAIgwiOIApAAIAfBxIACAAIAfhxIApAAIgwCOIAoAAIAAAaIguAAIAAAUIAuAAIAAAaIguAAIAABFg");
	this.shape.setTransform(24.6,25.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,9,50.9,51.5);


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


(lib.bussanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buzz();
	this.instance.setTransform(89.7,80,1,1,0,0,0,89.7,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20},66).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,180.4,161);


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

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlGAzQAFgFAEgFIASgXIg1AAIgSABIAAgTIASAAIA8AAQAKAAADAAIALAMIgHAHIgfArgAhAAuIgngfIgHgGIgEgFQgCgEAAgCQABgEABgDQABgDADgDQACgCAJgIIAUgQIAPgNIAGgHIAWAQIgRANIggAZQgEADAAACQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIALAHQAOAKAaAVIAEAEIgTATQgEgGgIgJgABiA8IAAgGIgYAAIAAAGIgUAAIAAgMIAAgOIgJAPIgKgMIgJALIgNALIgGgIIgHgIQAGgEAEgFIAJgJQgFgFgNgHIAHgOIAEgTIgKAAIAAgTIALABIACAAQACgOAAgKIAUACIgDAWIAJAAIALgBIgBARIAGAAIAHgXQADgKABgGIAVAEIgDAKIgIAYIAQgBQgEgHgFgIIASgIIALATIAJATIgSAJIgDgIIgmAFIgMABIgBgMIgDAQIgGARIAKAJIAAgcIA0AAIALAAIAAAMIAAAjIABANgABKAkIAYAAIAAgSIgYAAgAAYAFIAEADIAFgMIACgQIgFAAQgDARgDAIgAjXAxIgHgJIAQgEQAHgBAEgDIAHgFIADgGQgEADgEACQgDACgHgBQgFAAgFgCQgEgBgEgEQgDgDgCgEQgCgEAAgFQAAgEACgFQACgEAEgDQAFgEAFgCQAFgBAHAAQAGgBAEACIAAgEIAAgDQgbAAgfAEIgBgXIAIAAIAzgBIgBgOIAXAAIgBAOIAkgBIABAVIgXgBIgOAAIAAATQAEAGABADIABAMIgBAKQgCAFgDAFIgGAIIgKAIIgLAFIgPAFQgDgHgDgEgAjMgBQgCABAAACQAAAEACACQADABAEAAQADABAEgDQACgCAAgEQAAgBgCgBQgDgCgEAAQgEAAgDACgAE+A3QgGgBgFgDQgEgDgDgFQgCgEAAgFQAAgFABgEQACgDAEgDQAEgDAFgBQAEgCAFAAQAIAAAFADQAHACAEAFQADADADAIQAFgDACgEQADgDAAgFIgCgGIgEgFIgHgCIgKgBIgKAAIgLADIgKADIgJAFIgMAKIgMgTQAFgDAVgNQAKgIATgSIgfACIgIABIgBgVIASAAIAogBIAKgBIAKAPIgUARIgSAOIARgCQAHAAAJACQAHADAFAEQAFACACAGQACAFABAHIgBAJQgBAFgDAEIgFAHIgIAGQgKAEgGACIgTACQgIAAgHgCgAE+AiQAAADADABQADACAGAAIADgBQgBgFgCgCQgDgDgEAAQgFAAAAAFgADGAtIgGgKQAKAAAIgDQAIgCAFgEIAFgEIAEgGIACgGIAAgHIAAgFIgDgGIgFgEIgHgEQgGAQgEAIQgHANgEAGIgJAJIgHAHQgEADgEABIgIACQgGAAgFgDQgFgDgDgEQgDgEgCgHQgCgFAAgIIABgMIAEgJQADgGAEgEIAJgJIgEgQIgDgIIAXgFQABANABAHIALgDIALgBIAEAAIACgTIAYAEIgGASQAGACAEACQAEABAEAEIAGAHQADADABAFIAEAIIABAIQAAAIgDAGQgCAHgEAHQgEAFgFAFQgHAEgHADQgOAFgJACIgFgMgAChAEIgBAKQAAAFABAEQADADADAAIAEgBIAEgEQgEgJgFgOQgDACgCAEgAC+gSIgHADQACAJAEAIQAFgHAFgNIgJAAgAkhgQIAAAJIgzAAIgNAAIAAgJIgWALIgEgLIgGgJIARgGIAOgIIARgPIAEgHIAWAAQAGAJAGAFIAUANQAGAEAOAEIgFALIgEAKIgVgLgAkvgZIgLgJIgIgJIgIAJIgKAJIAlAAgAg2gcIAMgFIAKATIgNAFQgDgIgGgLgAglgiIAMgEIAKASIgMAEIgKgSg");
	this.shape.setTransform(0,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(13));

	// Layer 5
	this.instance = new lib.btnbg2();
	this.instance.setTransform(0,25.5,1,1,0,0,0,130,25.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).to({alpha:0},6).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC9E09").s().p("A0SAPIAAgdMAolAAAIAAAdg");
	this.shape_1.setTransform(0,49.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(13));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCCD2A").s().p("A0SDvIAAneMAolAAAIAAHeg");
	this.shape_2.setTransform(0,24);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,0,260,51);


// stage content:
(lib.highlow_300x250_2b_JPY = function(mode,startPosition,loop) {
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
	this.frame_240 = function() {
		if(this.loopNumber >= 1){
			console.log("STOP BANNER");
			this.stop();
		} else {
			this.loopNumber++;
			console.log("RESTART: " + this.loopNumber);
		}
	}
	this.frame_251 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(240).call(this.frame_240).wait(11).call(this.frame_251).wait(1));

	// clickTagBtn
	this.clickTagBtn = new lib._clicktag();
	this.clickTagBtn.setTransform(0,0,1.875,0.417);
	new cjs.ButtonHelper(this.clickTagBtn, 0, 1, 2, false, new lib._clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTagBtn).wait(252));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(252));

	// bt
	this.bt = new lib.btn();
	this.bt.setTransform(150,398);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(193).to({y:179,alpha:0},0).to({alpha:1},9).wait(40).to({y:398},9,cjs.Ease.get(0.9)).wait(1));

	// logo
	this.instance = new lib.logo_mc();
	this.instance.setTransform(148.5,56.8,1,1,0,0,0,64.5,18.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).to({alpha:1},9).wait(49).to({y:-204.2},9,cjs.Ease.get(0.9)).wait(1));

	// t3
	this.instance_1 = new lib.t3();
	this.instance_1.setTransform(149.2,282.7,1,1,0,0,0,0,29.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(133).to({_off:false},0).to({y:192.7},9,cjs.Ease.get(0.9)).wait(35).to({y:122.7},10,cjs.Ease.get(0.9)).wait(55).to({y:-138.3},9,cjs.Ease.get(0.9)).wait(1));

	// s-mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Am/QLIAAtAIY/AAIAANAg");
	var mask_graphics_133 = new cjs.Graphics().p("Am/QLIAAtAIY/AAIAANAg");
	var mask_graphics_134 = new cjs.Graphics().p("Am/OyIAAtAIY/AAIAANAg");
	var mask_graphics_135 = new cjs.Graphics().p("Am/NiIAAs/IY/AAIAAM/g");
	var mask_graphics_136 = new cjs.Graphics().p("Am/MdIAAs9IY/AAIAAM9g");
	var mask_graphics_137 = new cjs.Graphics().p("Am/LiIAAs9IY/AAIAAM9g");
	var mask_graphics_138 = new cjs.Graphics().p("Am/KwIAAs9IY/AAIAAM9g");
	var mask_graphics_139 = new cjs.Graphics().p("Am/KJIAAs9IY/AAIAAM9g");
	var mask_graphics_140 = new cjs.Graphics().p("Am/JrIAAs9IY/AAIAAM9g");
	var mask_graphics_141 = new cjs.Graphics().p("Am/JXIAAs9IY/AAIAAM9g");
	var mask_graphics_142 = new cjs.Graphics().p("Am/JOIAAs+IY/AAIAAM+g");
	var mask_graphics_175 = new cjs.Graphics().p("Am/JOIAAs+IY/AAIAAM+g");
	var mask_graphics_176 = new cjs.Graphics().p("AlGGGIAArzIWwAAIAALzg");
	var mask_graphics_177 = new cjs.Graphics().p("AjcFZIAAqxIUzAAIAAKxg");
	var mask_graphics_178 = new cjs.Graphics().p("AiBE+IAAp7ITIAAIAAJ7g");
	var mask_graphics_179 = new cjs.Graphics().p("Ag2DsIAApMIRvAAIAAJMg");
	var mask_graphics_180 = new cjs.Graphics().p("AAEB2IAAonIQqAAIAAIng");
	var mask_graphics_181 = new cjs.Graphics().p("AAxAeIAAoLIP1AAIAAILg");
	var mask_graphics_182 = new cjs.Graphics().p("ABPgaIAAn7IPSAAIAAH7g");
	var mask_graphics_183 = new cjs.Graphics().p("ABdg2IAAnyIPBAAIAAHyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:115.3,y:103.5}).wait(133).to({graphics:mask_graphics_133,x:115.3,y:103.5}).wait(1).to({graphics:mask_graphics_134,x:115.3,y:94.6}).wait(1).to({graphics:mask_graphics_135,x:115.3,y:86.7}).wait(1).to({graphics:mask_graphics_136,x:115.3,y:79.8}).wait(1).to({graphics:mask_graphics_137,x:115.3,y:73.8}).wait(1).to({graphics:mask_graphics_138,x:115.3,y:68.9}).wait(1).to({graphics:mask_graphics_139,x:115.3,y:64.9}).wait(1).to({graphics:mask_graphics_140,x:115.3,y:62}).wait(1).to({graphics:mask_graphics_141,x:115.3,y:60}).wait(1).to({graphics:mask_graphics_142,x:115.3,y:59}).wait(33).to({graphics:mask_graphics_175,x:115.3,y:59}).wait(1).to({graphics:mask_graphics_176,x:113.1,y:39}).wait(1).to({graphics:mask_graphics_177,x:111.2,y:8.5}).wait(1).to({graphics:mask_graphics_178,x:109.5,y:-18.6}).wait(1).to({graphics:mask_graphics_179,x:108.1,y:-35.4}).wait(1).to({graphics:mask_graphics_180,x:107.1,y:-43.4}).wait(1).to({graphics:mask_graphics_181,x:106.2,y:-49.5}).wait(1).to({graphics:mask_graphics_182,x:105.7,y:-53.5}).wait(1).to({graphics:mask_graphics_183,x:105.4,y:-55.4}).wait(1).to({graphics:null,x:0,y:0}).wait(68));

	// grap
	this.instance_2 = new lib.grap_1();
	this.instance_2.setTransform(152.5,240.5,1,1,0,0,0,76.5,23.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(133).to({_off:false},0).to({y:88.5},9,cjs.Ease.get(0.9)).wait(33).to({scaleX:0.6,scaleY:0.6,x:164.1,y:-78.6},8,cjs.Ease.get(0.9)).to({_off:true},1).wait(68));

	// 10
	this.instance_3 = new lib._50();
	this.instance_3.setTransform(177.9,167.5,1,1,0,0,0,35.4,25.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(97).to({_off:false},0).to({alpha:1},11).wait(25).to({y:16.5},9,cjs.Ease.get(0.9)).to({_off:true},1).wait(109));

	// 10-s
	this.instance_4 = new lib._10();
	this.instance_4.setTransform(149.9,167.5,1,1,0,0,0,24.4,25.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).to({alpha:1},9).wait(33).to({alpha:0},8).wait(10).to({x:113.9},0).to({alpha:1},11).wait(25).to({y:16.5},9,cjs.Ease.get(0.9)).to({_off:true},1).wait(109));

	// buzz
	this.instance_5 = new lib.bussanim();
	this.instance_5.setTransform(150.7,196.3,1,1,0,0,0,89.7,80);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({alpha:1},8).wait(8).to({alpha:0},7).to({_off:true},1).wait(34).to({_off:false},0).to({alpha:1},8).wait(8).to({alpha:0},7).to({_off:true},1).wait(149));

	// Laptop\
	this.instance_6 = new lib.laptop();
	this.instance_6.setTransform(415.5,170.9,1,1,0,0,0,0,59.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:150.5},10,cjs.Ease.get(1)).wait(123).to({y:81.9},9,cjs.Ease.get(0.9)).wait(33).to({scaleX:0.6,scaleY:0.6,x:162.9,y:-82.6},8,cjs.Ease.get(0.9)).to({_off:true},1).wait(68));

	// t2
	this.instance_7 = new lib.t2();
	this.instance_7.setTransform(149.2,54.8,0.724,0.724,0,0,0,-0.1,30.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(57).to({_off:false},0).to({regX:0,regY:29.9,y:54.5,alpha:1},9).wait(67).to({y:-34.5},9,cjs.Ease.get(0.9)).to({_off:true},1).wait(109));

	// t1
	this.instance_8 = new lib.t1();
	this.instance_8.setTransform(149.2,61,1,1,0,0,0,0,17.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({alpha:1},7).wait(39).to({alpha:0},9).to({_off:true},1).wait(192));

	// m2-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_74 = new cjs.Graphics().p("APnP+IAAvoIPoAAIAAG5IglAPQgCABh9AAQiCgBgWACQglAEgQATQgOAPABAXQACAYAWAOIAKAFIAmAGIADAAIEzApIAAGHg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AOIP+IAAvoIPoAAIAAG5IglAPQgCABh9AAQiCgBgWACQglAEgQATQgOAPABAXQACAYAWAOIAKAFIAmAGIADAAIEzApIAAGHg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AMyP+IAAvoIPoAAIAAG5IglAPQgCABh8AAQiDgBgVACQglAEgRATQgOAPACAXQACAYAVAOIALAFIAmAGIADAAIEyApIAAGHg");
	var mask_1_graphics_77 = new cjs.Graphics().p("ALmP+IAAvoIPoAAIAAG5IglAPQgCABh8AAQiDgBgVACQglAEgRATQgOAPACAXQACAYAVAOIALAFIAmAGIADAAIEyApIAAGHg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AKjP+IAAvoIPoAAIAAG5IglAPQgCABh8AAQiDgBgVACQglAEgRATQgOAPACAXQACAYAVAOIALAFIAmAGIADAAIEyApIAAGHg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AJqP+IAAvoIPoAAIAAG5IglAPQgCABh8AAQiDgBgVACQglAEgRATQgOAPACAXQACAYAVAOIALAFIAmAGIADAAIEyApIAAGHg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AI6P+IAAvoIPoAAIAAG5IglAPQgCABh8AAQiDgBgVACQglAEgRATQgOAPACAXQACAYAVAOIALAFIAmAGIADAAIEyApIAAGHg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AIUP+IAAvoIPoAAIAAG5IglAPQgCABh8AAQiDgBgVACQglAEgRATQgOAPACAXQACAYAVAOIALAFIAmAGIADAAIEyApIAAGHg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AH3P+IAAvoIPoAAIAAG5IglAPQgCABh8AAQiDgBgVACQglAEgRATQgOAPACAXQACAYAVAOIALAFIAmAGIADAAIEyApIAAGHg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AHkP+IAAvoIPoAAIAAG5IglAPQgCABh9AAQiCgBgWACQglAEgQATQgOAPABAXQACAYAWAOIAKAFIAmAGIADAAIEzApIAAGHg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AHaP+IAAvoIPoAAIAAG5IglAPQgCABh9AAQiCgBgWACQglAEgQATQgOAPABAXQACAYAWAOIAKAFIAmAGIADAAIEzApIAAGHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_1_graphics_74,x:199.9,y:102.3}).wait(1).to({graphics:mask_1_graphics_75,x:190.4,y:102.3}).wait(1).to({graphics:mask_1_graphics_76,x:181.9,y:102.3}).wait(1).to({graphics:mask_1_graphics_77,x:174.3,y:102.3}).wait(1).to({graphics:mask_1_graphics_78,x:167.6,y:102.3}).wait(1).to({graphics:mask_1_graphics_79,x:161.9,y:102.3}).wait(1).to({graphics:mask_1_graphics_80,x:157.1,y:102.3}).wait(1).to({graphics:mask_1_graphics_81,x:153.3,y:102.3}).wait(1).to({graphics:mask_1_graphics_82,x:150.4,y:102.3}).wait(1).to({graphics:mask_1_graphics_83,x:148.4,y:102.3}).wait(1).to({graphics:mask_1_graphics_84,x:147.4,y:102.3}).wait(14).to({graphics:null,x:0,y:0}).wait(154));

	// m2
	this.instance_9 = new lib.m2();
	this.instance_9.setTransform(351.7,163.7,1,1,0,0,0,44.2,20.4);
	this.instance_9._off = true;

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({_off:false},0).to({x:246.7},10,cjs.Ease.get(0.9)).wait(2).to({x:196.7},11).to({_off:true},1).wait(154));

	// h2
	this.instance_10 = new lib.hand2();
	this.instance_10.setTransform(415.5,157.1,1,1,0,0,0,56.9,26.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(74).to({_off:false},0).to({x:310.5},10,cjs.Ease.get(0.9)).wait(9).to({x:355.5},10,cjs.Ease.get(-0.9)).to({_off:true},1).wait(148));

	// m (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_15 = new cjs.Graphics().p("AnzQOIAAmFIAtACQAlABAWgBQBMgGAegaQAVgSgCgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgQgBgRABIgHAaIAAngIPnAAIAAPog");
	var mask_2_graphics_16 = new cjs.Graphics().p("AnyQOIAAmFIAtACQAjABAXgBQBLgGAfgaQAVgSgCgaQgCgXgHgMQgNgUgkgLQgugOhVgDQgQgBgRABIgGAaIAAngIPmAAIAAPog");
	var mask_2_graphics_17 = new cjs.Graphics().p("AnzQOIAAmFIAtACQAlABAWgBQBMgGAegaQAVgSgCgaQgCgXgHgMQgOgUgjgLQgugOhVgDQgQgBgQABIgIAaIAAngIPmAAIAAPog");
	var mask_2_graphics_18 = new cjs.Graphics().p("AnzQOIAAmFIAtACQAlABAWgBQBMgGAegaQAVgSgCgaQgCgXgHgMQgOgUgjgLQgugOhVgDQgQgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_19 = new cjs.Graphics().p("AnyQOIAAmFIAtACQAjABAXgBQBLgGAfgaQAVgSgCgaQgCgXgIgMQgMgUgkgLQgugOhWgDQgPgBgQABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_20 = new cjs.Graphics().p("AnyQOIAAmFIAtACQAjABAXgBQBLgGAfgaQAVgSgCgaQgCgXgHgMQgNgUgkgLQgugOhVgDQgQgBgRABIgGAaIAAngIPmAAIAAPog");
	var mask_2_graphics_21 = new cjs.Graphics().p("AnyQOIAAmFIAtACQAkABAWgBQBMgGAegaQAVgSgCgaQgCgXgIgMQgNgUgjgLQgtgOhXgDQgPgBgQABIgHAaIAAngIPlAAIAAPog");
	var mask_2_graphics_22 = new cjs.Graphics().p("AnyQOIAAmFIAtACQAjABAXgBQBLgGAfgaQAVgSgCgaQgCgXgIgMQgMgUgkgLQgugOhWgDQgPgBgQABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_23 = new cjs.Graphics().p("AnzQOIAAmFIAtACQAlABAWgBQBMgGAegaQAVgSgCgaQgCgXgIgMQgNgUgjgLQgtgOhXgDQgPgBgQABIgIAaIAAngIPmAAIAAPog");
	var mask_2_graphics_24 = new cjs.Graphics().p("AnyQOIAAmFIAtACQAjABAXgBQBLgGAfgaQAVgSgCgaQgCgXgHgMQgNgUgkgLQgugOhVgDQgQgBgRABIgGAaIAAngIPmAAIAAPog");
	var mask_2_graphics_25 = new cjs.Graphics().p("AnyQOIAAmFIAtACQAjABAXgBQBLgGAfgaQAVgSgCgaQgCgXgIgMQgMgUgkgLQgugOhWgDQgPgBgQABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_26 = new cjs.Graphics().p("AnzQOIAAmFIAtACQAlABAWgBQBMgGAegaQAVgSgCgaQgCgXgHgMQgOgUgjgLQgugOhVgDQgQgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_27 = new cjs.Graphics().p("AnvQOIAAmFIAtACQAkABAWgBQBMgGAegaQAVgSgCgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgQgBgQABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_28 = new cjs.Graphics().p("AneQOIAAmFIAtACQAkABAWgBQBMgGAegaQAVgSgCgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgQgBgQABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_29 = new cjs.Graphics().p("AnRQOIAAmFIAtACQAkABAWgBQBMgGAegaQAVgSgCgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgQgBgQABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_30 = new cjs.Graphics().p("AnIQOIAAmFIAtACQAkABAWgBQBMgGAegaQAVgSgCgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgQgBgQABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_31 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_133 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_134 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_135 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_136 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_137 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_138 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_139 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_140 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_141 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");
	var mask_2_graphics_142 = new cjs.Graphics().p("AnDQOIAAmFIAtACQAkABAXgBQBLgGAegaQAWgSgDgaQgCgXgHgMQgNgUgkgLQgtgOhWgDQgPgBgRABIgHAaIAAngIPmAAIAAPog");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_2_graphics_15,x:-49.5,y:103.8}).wait(1).to({graphics:mask_2_graphics_16,x:-36.9,y:103.8}).wait(1).to({graphics:mask_2_graphics_17,x:-25.1,y:103.8}).wait(1).to({graphics:mask_2_graphics_18,x:-14.1,y:103.8}).wait(1).to({graphics:mask_2_graphics_19,x:-3.9,y:103.8}).wait(1).to({graphics:mask_2_graphics_20,x:5.6,y:103.8}).wait(1).to({graphics:mask_2_graphics_21,x:14.4,y:103.8}).wait(1).to({graphics:mask_2_graphics_22,x:22.3,y:103.8}).wait(1).to({graphics:mask_2_graphics_23,x:29.5,y:103.8}).wait(1).to({graphics:mask_2_graphics_24,x:36,y:103.8}).wait(1).to({graphics:mask_2_graphics_25,x:41.6,y:103.8}).wait(1).to({graphics:mask_2_graphics_26,x:46.5,y:103.8}).wait(1).to({graphics:mask_2_graphics_27,x:50.3,y:103.8}).wait(1).to({graphics:mask_2_graphics_28,x:52,y:103.8}).wait(1).to({graphics:mask_2_graphics_29,x:53.3,y:103.8}).wait(1).to({graphics:mask_2_graphics_30,x:54.2,y:103.8}).wait(1).to({graphics:mask_2_graphics_31,x:54.8,y:103.8}).wait(102).to({graphics:mask_2_graphics_133,x:54.8,y:103.8}).wait(1).to({graphics:mask_2_graphics_134,x:54.8,y:103.8}).wait(1).to({graphics:mask_2_graphics_135,x:54.8,y:103.8}).wait(1).to({graphics:mask_2_graphics_136,x:54.8,y:103.8}).wait(1).to({graphics:mask_2_graphics_137,x:54.8,y:103.8}).wait(1).to({graphics:mask_2_graphics_138,x:54.8,y:103.8}).wait(1).to({graphics:mask_2_graphics_139,x:54.8,y:103.8}).wait(1).to({graphics:mask_2_graphics_140,x:54.8,y:103.8}).wait(1).to({graphics:mask_2_graphics_141,x:54.8,y:103.8}).wait(1).to({graphics:mask_2_graphics_142,x:54.8,y:103.8}).wait(1).to({graphics:null,x:0,y:0}).wait(109));

	// note
	this.instance_11 = new lib.note_10();
	this.instance_11.setTransform(-54.5,164.3,1,1,0,0,0,48.5,20.4);
	this.instance_11._off = true;

	this.instance_11.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).to({x:54.5},16,cjs.Ease.get(0.9)).wait(2).to({x:99.5},10,cjs.Ease.get(-0.9)).to({_off:true},1).wait(208));

	// hand
	this.instance_12 = new lib.hand();
	this.instance_12.setTransform(-149.9,133.5,1,1,0,0,0,73.4,44.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({_off:false},0).to({x:-40.9},16,cjs.Ease.get(0.9)).wait(8).to({x:-75.9},11,cjs.Ease.get(-0.9)).to({_off:true},1).wait(201));

	// s
	this.instance_13 = new lib.lapshad();
	this.instance_13.setTransform(446.4,289.2,1,1,0,0,0,144.1,175);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:181.4},10,cjs.Ease.get(0.9)).wait(123).to({y:200.2},9,cjs.Ease.get(0.9)).wait(33).to({regX:144,scaleX:0.6,scaleY:0.6,y:-11.6,alpha:0},8,cjs.Ease.get(0.9)).to({_off:true},1).wait(68));

	// bg-o
	this.instance_14 = new lib.bgo();
	this.instance_14.setTransform(150,351,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(133).to({y:262},9,cjs.Ease.get(0.9)).wait(35).to({y:131},10,cjs.Ease.get(0.9)).wait(55).to({y:350},9,cjs.Ease.get(0.9)).wait(1));

	// bg2
	this.instance_15 = new lib.bg2_1();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(252));

	// bg
	this.instance_16 = new lib._bg();
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(252));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,690.5,610.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;