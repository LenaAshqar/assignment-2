import { useEffect } from 'react';
import './ClickSpark.css';

const SPARK_COUNT = 14;
const SPARK_COLORS = ['#fa027e', '#7b5cff', '#4cc9f0', '#ffe066'];
const SPARK_DURATION = 900;

function createSparkParticles(container) {
    for (let index = 0; index < SPARK_COUNT; index += 1) {
        const particle = document.createElement('span');
        particle.className = 'click-spark__particle';

        const angle = Math.random() * 360;
        const distance = 30 + Math.random() * 26;
        const color = SPARK_COLORS[index % SPARK_COLORS.length];
        const delay = Math.random() * 60;
        const size = 6 + Math.random() * 6;

        particle.style.setProperty('--spark-angle', `${angle}deg`);
        particle.style.setProperty('--spark-distance', `${distance}px`);
        particle.style.setProperty('--spark-color', color);
        particle.style.setProperty('--spark-size', `${size}px`);
        particle.style.animationDelay = `${delay}ms`;
        particle.style.setProperty('--spark-duration', `${500 + Math.random() * 200}ms`);

        container.appendChild(particle);
    }
}

function spawnSpark({ clientX, clientY }) {
    const spark = document.createElement('span');
    spark.className = 'click-spark';
    spark.style.left = `${clientX}px`;
    spark.style.top = `${clientY}px`;

    createSparkParticles(spark);

    spark.addEventListener(
        'animationend',
        () => {
            spark.remove();
        },
        { once: true }
    );

    setTimeout(() => {
        spark.remove();
    }, SPARK_DURATION);

    document.body.appendChild(spark);
}

export default function ClickSpark() {
    useEffect(() => {
        const handlePointerDown = event => {
            if (event.button !== undefined && event.button !== 0) {
                return;
            }

            spawnSpark(event);
        };

        window.addEventListener('pointerdown', handlePointerDown);

        return () => {
            window.removeEventListener('pointerdown', handlePointerDown);
        };
    }, []);

    return null;
}