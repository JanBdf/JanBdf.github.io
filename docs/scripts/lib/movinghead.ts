export let movingheads: Movinghead[] = [];

export class Movinghead {
    container: HTMLElement;
    head: HTMLElement;
    base: HTMLElement;
    beam: HTMLElement;
    head_container: HTMLElement;

    private beam_angle_deg: number = 0;
    private head_angle_deg: number;
    private beam_offset: number;  // Offset from bottom left corner of div

    pointTo(x: number, y: number): void { // TODO: Use base anchor as reference point
        let bounds: DOMRect = this.head.getBoundingClientRect();

        let delta_x: number = x - (bounds.left + bounds.width / 2);
        let delta_y: number = y - (bounds.top + bounds.height / 2);

        let angle: number = Math.atan(delta_x / delta_y);
        let angle_actual: number;

        if (delta_y > 0) {
            angle_actual = Math.PI * 2 - angle;
        } else {
            angle_actual = Math.PI - angle;
        }

        this.setAngle((angle_actual - Math.PI) / Math.PI * 180);
        this.fixAlignment();
    }

    setAngle(angle_deg: number): void {
        this.head_angle_deg = angle_deg;
        let angle_rad: number = (this.head_angle_deg + 180) / 180 * Math.PI;
        this.head_container.style.transform = `rotate(${angle_rad}rad)`;
        this.fixAlignment();
    }

    setBeamMask(): void {
        let lens_width: number = 483 / 794 * this.head.clientWidth;
        let offset: number = Math.sqrt(lens_width ** 2 / 2);
        let rest: number = this.beam.clientWidth - offset;

        let hyperbole: number = Math.sqrt(rest ** 2 * 2);
        let some_number: number = Math.tan((this.beam_angle_deg / 2) / 180 * Math.PI) * hyperbole;
        let additional: number = some_number / Math.cos(this.head_angle_deg / 180 * Math.PI);
        let opposite: number = offset + additional;
        let opposite_rest: number = this.beam.clientWidth - opposite;

        this.beam.style.clipPath = `polygon(0 ${rest}px, ${offset}px 100%, 100% ${opposite}px, 100% 0, ${opposite_rest}px 0)`;

        this.beam_offset = Math.sqrt((offset ** 2) - ((lens_width / 2) ** 2));
    }

    // TODO: Should be half. 45deg is currently max (90), why?
    // TODO: Clip to box size ? Because 0 is straight, not focused
    setBeamAngle(angle: number): void {
        this.beam_angle_deg = angle;
        this.setBeamMask();
    }

    fixAlignment(): void {
        // Fix head relative to base

        let base_anchor: number = 1333 / 1523 * this.base.clientHeight;
        // Center of rotation / transform origin in percent from top
        let head_COR = 42;
        let head_anchor: number = this.head.clientHeight / 100 * (100 - head_COR);
        let offset: number = base_anchor - head_anchor;

        this.head_container.style.transformOrigin = `0% 0%`;
        let temp = this.head.clientHeight + offset;
        this.head_container.style.bottom = `800px`;

        console.log(base_anchor + offset);

        // Fix beam relative to head
        let debug: HTMLElement = document.querySelector(".debug");
        debug.style.left = `0`;
        debug.style.visibility = "hidden";

        this.beam.style.bottom = `-${this.head.clientHeight}px`;
    }

    constructor(container: HTMLElement) {
        this.container = container;
        this.base = container.querySelector(".movinghead-base");
        this.head = container.querySelector(".movinghead-head");
        this.beam = container.querySelector(".beam");
        this.head_container = container.querySelector(".head-container");

        // this.setAngle(0);
        this.fixAlignment();
        this.setBeamAngle(0);
    }
}

export function init(): void {
    let base_elements: NodeListOf<Element> = document.querySelectorAll(".movinghead");
    base_elements.forEach((element: Element): void => {
        movingheads.push(new Movinghead(element as HTMLElement));
    });
}
