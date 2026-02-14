import React from "react";

export const USFlag = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        className={className}
    >
        <g fillRule="evenodd">
            <g strokeWidth="1pt">
                <path fill="#bd3d44" d="M0 0h640v480H0z" />
                <path stroke="none" fill="#fff" d="M0 55.4h640v37H0zM0 129h640v37H0zM0 202.8h640v37H0zM0 276.6h640v37H0zM0 350.4h640v37H0zM0 424.2h640v37H0z" />
                <path fill="#192f5d" d="M0 0h247v258.5H0z" />
            </g>
            <g fill="#fff">
                <path d="M15.5 17.5l5.5 16.5h-17l14-10-5.5-16.5 5.5 16.5 13.5-10-14 10z" />
                <use href="#a" width="100%" height="100%" transform="translate(41.6)" />
                <use href="#a" width="100%" height="100%" transform="translate(83.2)" />
                <use href="#a" width="100%" height="100%" transform="translate(124.8)" />
                <use href="#a" width="100%" height="100%" transform="translate(166.4)" />
                <use href="#a" width="100%" height="100%" transform="translate(208)" />
                <path d="M15.5 45.4l5.5 16.5h-17l14-10-5.5-16.5 5.5 16.5 13.5-10-14 10z" id="a" />
                <use href="#b" width="100%" height="100%" transform="translate(41.6)" />
                <use href="#b" width="100%" height="100%" transform="translate(83.2)" />
                <use href="#b" width="100%" height="100%" transform="translate(124.8)" />
                <use href="#b" width="100%" height="100%" transform="translate(166.4)" />
                <use href="#b" width="100%" height="100%" transform="translate(208)" />
            </g>
            <use href="#c" width="100%" height="100%" transform="translate(0 55.7)" />
            <use href="#c" width="100%" height="100%" transform="translate(0 111.4)" />
            <use href="#c" width="100%" height="100%" transform="translate(0 167.1)" />
            <use href="#c" width="100%" height="100%" transform="translate(0 222.8)" />
            <g fill="#fff" id="c">
                <path d="M36.3 45.4l5.5 16.5h-17l14-10-5.5-16.5 5.5 16.5 13.5-10-14 10z" id="b" />
                <use href="#b" width="100%" height="100%" transform="translate(41.6)" />
                <use href="#b" width="100%" height="100%" transform="translate(83.2)" />
                <use href="#b" width="100%" height="100%" transform="translate(124.8)" />
                <use href="#b" width="100%" height="100%" transform="translate(166.4)" />
            </g>
        </g>
    </svg>
);
