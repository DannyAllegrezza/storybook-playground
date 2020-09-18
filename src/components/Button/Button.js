import React from "react";
import "./button.css";

export default function Button({label}) {
    return (
        <div class="button">
            {label}
        </div>
    )
}