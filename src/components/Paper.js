import React, {
    useRef,
    useEffect,
    useState,
    useCallback,
    useMemo,
} from "react";
import paper, { view, Path } from "paper";
import getRandomColor from "../methods/randomColor";
import { default as key_sound } from "../key_sound";
import "./Paper.css";

const Paper = () => {
    const [keys] = useState(key_sound);
    const myCanvas = useRef(null);
    // let stars = [];

    let stars = useMemo(() => [], []);

    const drawCircle = useCallback(() => {
        let y = Math.floor(Math.random() * view.bounds.height);
        let x = Math.floor(Math.random() * view.bounds.width);

        let star = new Path.Star({
            center: [x, y],
            points: 5,
            radius1: 13,
            radius2: 40,
            fillColor: getRandomColor(),
        });

        star.rotationSpeed = Math.floor(Math.random() * 10);
        stars.push(star);
    }, [stars]);

    const keyPressedHandler = useCallback(
        (keyPressed) => {
            if (keys.hasOwnProperty(keyPressed)) {
                keys[keyPressed].play();
            }
            drawCircle();
        },
        [drawCircle, keys]
    );

    useEffect(() => {
        const currentCanvas = myCanvas.current;
        paper.setup(currentCanvas);

        view.onFrame = () => {
            stars.forEach((star, index) => {
                star.rotate(star.rotationSpeed);
                star.fillColor.hue += 1;

                if (star.fillColor.hue > 239) {
                    star.scale(0.9);
                }

                if (star.fillColor.hue > 500) {
                    stars.splice(index, 1);
                }
            });
        };
        return () => {
            //
        };
    }, [stars]);

    useEffect(() => {
        document.addEventListener("keypress", (e) => {
            keyPressedHandler(e.key);
        });

        // console.log(view);
        return () => {
            document.removeEventListener("keypress", (e) => {
                keyPressedHandler(e.key);
            });
        };
    }, [keyPressedHandler]);

    return <canvas ref={myCanvas}></canvas>;
};

export default Paper;
