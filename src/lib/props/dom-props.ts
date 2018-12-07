import classNames from "classnames";

import {CSSProperties} from "react";

export interface DomProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
}

export namespace DomProps {
    export function extract({className, id, style}: DomProps, ...additionalClassName: string[]) {
        return {
            className: classNames(className, ...additionalClassName),
            id,
            style
        }
    }
}