import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    square?: boolean;
    disabled?: boolean;
    children?: ReactNode
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        disabled,
        size = ButtonSize.M,
        square,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };
    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
