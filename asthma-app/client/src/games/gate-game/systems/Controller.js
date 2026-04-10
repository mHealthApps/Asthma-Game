

export default class Controller {
  constructor(app, target) {
    this.app = app;
    this.target = target; // the object you want to control (e.g. Player.view)

    // --- Drag state ---
    this.isDragging = false;
    this.lastPointerX = 0;

    // --- Movement ---
    this.velocityX = 0;
    this.dragSensitivity = 0.1;
    this.tiltSensitivity = 0.05;

    // --- Tilt ---
    this.tiltX = 0;

    // Bind events
    this.initPointerEvents();
    // this.initTiltEvents();
  }

  initPointerEvents() {
    window.addEventListener("pointerdown", (e) => {
      this.isDragging = true;
      this.lastPointerX = e.clientX;
    });

    window.addEventListener("pointermove", (e) => {
      if (!this.isDragging) return;

      const deltaX = e.clientX - this.lastPointerX;
      this.lastPointerX = e.clientX;

      // Add movement instead of snapping
      this.velocityX += deltaX * this.dragSensitivity;
    });

    window.addEventListener("pointerup", () => {
      this.isDragging = false;
    });

    window.addEventListener("pointerleave", () => {
      this.isDragging = false;
    });
  }

  initTiltEvents() {
    // iOS requires permission
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      // You must call this from a user interaction in your app
      this.requestTiltPermission = async () => {
        try {
          const response = await DeviceOrientationEvent.requestPermission();
          if (response === "granted") {
            window.addEventListener("deviceorientation", this.handleTilt);
          }
        } catch (err) {
          console.warn("Tilt permission denied", err);
        }
      };
    } else {
      window.addEventListener("deviceorientation", this.handleTilt);
    }
  }

  handleTilt = (event) => {
    // gamma = left/right tilt (-90 to 90)
    const gamma = event.gamma || 0;

    // normalize roughly to -1 to 1
    this.tiltX = gamma / 45;
  };

  update() {
    // Apply tilt as velocity
    // this.velocityX += this.tiltX * this.tiltSensitivity;

    // Apply movement
    this.target.x += this.velocityX;
    if (this.target.x > this.app.screen.width * 0.8) {
        this.target.x = this.app.screen.width * 0.8;
        this.velocityX = this.velocityX * -0.3;
    } else if (this.target.x < this.app.screen.width * 0.2) {
        this.target.x = this.app.screen.width * 0.2;
        this.velocityX = this.velocityX * -0.3;
    }

    // Friction (smooth stopping)
    this.velocityX *= 0.9;
  }
}
