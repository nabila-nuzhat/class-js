// Main examole ===================
let buttonProps = (borderRadius) => {
    const createVariantButtonProps = (variant, color) => {
        const newProps = {
            borderRadius,
            variant,
            color
        };
        return newProps;
    }
    return createVariantButtonProps;
}


let primaryButton = buttonProps("1rem");
console.log(primaryButton); // [Function: createVariantButtonProps]

const primaryVariantButtonProps = primaryButton("primary", "red");
console.log(primaryVariantButtonProps);
