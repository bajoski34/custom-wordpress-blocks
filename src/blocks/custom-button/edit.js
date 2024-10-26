/**
 * React for WordPress
 */
import { useState } from 'react';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, ColorPicker, SelectControl, ToggleControl, ColorPalette } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS, or SCSS files referenced in JavaScript files.
 * These files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


const FontColorPalette = ({ label, value, onChange}) => {
	const [ color, setColor ] = useState ( value )
	const colors = [
	  { name: 'red', color: '#f00' },
	  { name: 'white', color: '#fff' },
	  { name: 'blue', color: '#00f' },
	];
	return (
	  <ColorPalette
		colors={ colors }
		aria-label={ label }
		value={ color }
		onChange={ ( newColor ) => {
			setColor( newColor )
			onChange( newColor )
		} }
	  />
	);
};

const CurrencySelectControl = ({ value, onChange }) => {
    const [ currency, setCurrency ] = useState(value);

    return (
        <SelectControl
            label="Currency"
            value={ currency }
            options={ [
                { label: 'GBP', value: 'GBP' },
                { label: 'KES', value: 'KES' },
                { label: 'UGX', value: 'UGX' },
                { label: 'EUR', value: 'EUR' },
            ] }
            onChange={ ( newCurrency ) => {
                setCurrency(newCurrency);
                onChange(newCurrency);
            }}
            __nextHasNoMarginBottom
        />
    );
};

const ButtonController = ({ attributes, setAttributes }) => {
    const handleCurrencyChange = (currency) => {
        setAttributes({ currency });
    };

    return (
        <InspectorControls>
            <PanelBody title="Button Settings">
                <TextControl
                    label="Amount"
                    value={ attributes.amount }
                    onChange={ (val) => setAttributes({ amount: val }) }
                />
                <CurrencySelectControl
                    value={ attributes.currency }
                    onChange={ handleCurrencyChange }
                />
				<TextControl
                    label="Label"
                    value={ attributes.label }
                    onChange={ (val) => setAttributes({ label: val }) }
                />
                <ToggleControl
                    label="Use user's local currency"
                    checked={ attributes.useLocalCurrency }
                    onChange={ (val) => setAttributes({ useLocalCurrency: val }) }
                />
                <ToggleControl
                    label="Use current user email"
                    checked={ attributes.useCurrentUserEmail }
                    onChange={ (val) => setAttributes({ useCurrentUserEmail: val }) }
                />

				<FontColorPalette label="Font Color" value={ attributes.fontColor } onChange={ (val) => setAttributes({ fontColor: val }) } />
                <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px' }}>
                        Button Color
                    </label>
                    <ColorPicker
                        color={ attributes.backgroundColor }
                        onChangeComplete={ (val) => setAttributes({ backgroundColor: val.hex }) }
                    />
                </div>
            </PanelBody>
        </InspectorControls>
    );
};

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes, setAttributes } = props;
    const blockProps = useBlockProps();

    return (
        <div { ...blockProps }>
            <ButtonController attributes={ attributes } setAttributes={ setAttributes } />
            <button
                style={{ backgroundColor: attributes.backgroundColor, color: attributes.fontColor }}
                onClick={(e) => e.preventDefault()}
            >
               {attributes.label}
            </button>
        </div>
    );
}
