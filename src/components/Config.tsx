import {useState, useEffect, useRef} from 'react';
import * as React from 'react'
// @ts-ignore
import yaml from 'js-yaml';
// @ts-ignore
import Link from "@docusaurus/Link";

import {Remarkable} from 'remarkable';

const INDENT_SIZE = 30;

const createUrlHash = (parent, name) => {
    return parent + (parent ? '_' : '') + parseUrlHash(name);
};

const parseUrlHash = (name) => {
    return name.replace(/-/g, '_');
};

const scrollIntoView = (id) => {
    const targetElement = document.getElementById(id);

    if (!targetElement) {
        console.error(`Element with ID "${id}" not found.`);
        return;
    }

    const navbarHeightRems = 3.75;
    const navbarHeightPixels =
        navbarHeightRems * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const targetElementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const adjustedScrollPosition = targetElementPosition - navbarHeightPixels;

    setTimeout(() => {
        window.scrollTo({
            top: adjustedScrollPosition,
            behavior: 'smooth',
        });
    }, navigator.userAgent.includes('Chrome') && navigator.vendor.includes('Google Inc') ? 0 : 1);
};

const parseDefault = (value, collapse, parentKey, name, handleHashLinkClick, separator) => {

    const hash = createUrlHash(parentKey, name);

    if (value[0] === '[' && value[value.length - 1] === ']') {
        const items = value.replace("[", "").replace("]", "").split(",").map((item) => {
            return item.trim();
        });
        if (collapse && items.length > 3) {
            items.length = 3;
            items[2] = <i className={"expand-list-text"}>Click to expand</i>;
        }
        return (
            <>
                {separator.replace(/ /g, "")}
                <Link className={`config-anchor with-value-active hash-link`} href={`#${hash}`}
                      onClick={handleHashLinkClick}/>
                <div className="indent-2">
                    <div>
                        <ul className={"yaml-list-elem"}>
                            {items.map((item) => {
                                return <li key={item}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            {separator}{value}
            <Link className={`config-anchor with-value-active hash-link`} href={`#${hash}`}
                  onClick={handleHashLinkClick} title={hash}/>
        </>
    );
}

const parseItalics = (key) => {
    if (key.startsWith('<') && key.endsWith('>')) {
        return (
            <>
                <i>{key}</i>
            </>
        )
    }
    return key;
}

const parseDescriptionForVersioning = (description: String) => {
    return description;
}

const YamlNodeWithDescription = ({name, node, parentKey, root, separator, showAllDescriptions, defaultValue}) => {
    const ignoreInitialRenderRef = useRef(false);
    const [showDescription, setShowDescription] = useState(showAllDescriptions);

    node.default = node.default || defaultValue;
    node.description = node.description || 'N/A';

    const checkForHash = () => {
        if (typeof window === 'undefined') return;
        const hash = createUrlHash(parentKey, name);
        if (window.location.hash === `#${hash}`) {
            showAndScrollIntoView(hash);
        }
    }

    useEffect(() => {
        checkForHash()
    }, [name]);

    if (typeof window !== 'undefined') window.addEventListener('hashchange', checkForHash);

    useEffect(() => {
        if (ignoreInitialRenderRef.current) {
            setShowDescription(showAllDescriptions);
        } else {
            ignoreInitialRenderRef.current = true;
        }
    }, [showAllDescriptions]);

    const handleHashLinkClick = (event) => {
        event.preventDefault();
        history.pushState(null, "", event.currentTarget.hash);

        const fullURL = window.location.href.split('#')[0];
        const hash = createUrlHash(parentKey, name);
        navigator.clipboard.writeText(fullURL + '#' + hash);
        scrollIntoView(hash);

        event.stopPropagation();
    };

    const showAndScrollIntoView = (hash) => {
        setShowDescription(true);
        scrollIntoView(hash);
    }

    const md = new Remarkable({html: true});
    md.renderer.rules.text = function (tokens, idx) {
        const token = tokens[idx];
        const content = token.content;

        token.content = content
            .replace(':::tip', '<div class="theme-admonition theme-admonition-tip alert alert--success admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><span class="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><svg viewBox="0 0 12 16"><path fill-rule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"></path></svg></span>tip</div><div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><p style="margin-top: -24px">')
            .replace(':::info', '<div class="theme-admonition theme-admonition-info alert alert--info admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><span class="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><svg viewBox="0 0 14 16"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg></span>info</div><div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><p style="margin-top: -24px">')
            .replace(':::note', '<div class="theme-admonition theme-admonition-note alert alert--secondary admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><span class="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><svg viewBox="0 0 14 16"><path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"></path></svg></span>note</div><div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><p style="margin-top: -24px">')
            .replace(':::danger', '<div class="theme-admonition theme-admonition-danger alert alert--danger admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><span class="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><svg viewBox="0 0 12 16"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg></span>danger</div><div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><p style="margin-top: -24px">')
            .replace(':::caution', '<div class="theme-admonition theme-admonition-caution alert alert--warning admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><span class="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg></span>caution</div><div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><p style="margin-top: -24px">')

            .replace(':::', '</p></div></div>');

        return token.content;
    };

    return (
        <div style={{paddingLeft: `${root ? 0 : INDENT_SIZE}px`}} id={createUrlHash(parentKey, name)}
             className={"config-tagged-for-algolia"}>
            <div className={`description_word_wrap`} style={{marginBottom: showDescription ? 10 : 0}}>
                <button
                    onClick={() => {
                        setShowDescription(!showDescription);
                    }}
                    className={`config-node with-value${showDescription ? '-active' : ''} clean-btn button--link`}
                >
                    {parseItalics(name)}{parseDefault(node.default.toString(), !showDescription, parentKey, name, handleHashLinkClick, separator)}
                </button>
                <div className="indent-2" style={{marginBottom: 10, display: !showDescription ? "none" : ""}}>
                    <div className="description-text color-offset-box padding-md">
                        <div className="reactMarkDown"
                             dangerouslySetInnerHTML={{__html: md.render(parseDescriptionForVersioning(node.description.toString()) as string)}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const YamlTreeNode = ({root, name, parentKey, value, separator, showAllDescriptions, defaultValue}) => {
    const handleClick = (event) => {
        event.preventDefault();
        scrollIntoView(createUrlHash(parentKey, name));
        history.pushState(null, "", `#${createUrlHash(parentKey, name)}`);

        const fullURL = window.location.href.split('#')[0];
        const hash = createUrlHash(parentKey, name);
        navigator.clipboard.writeText(fullURL + '#' + hash);
        scrollIntoView(hash);

        event.stopPropagation();
    };

    const removeTrailingSpaces = (value) => {
        if (value.endsWith(' ')) {
            return removeTrailingSpaces(value.substring(0, value.length - 1));
        }
        return value;
    }

    useEffect(() => {
        const hash = createUrlHash(parentKey, name);
        if (window.location.hash === `#${hash}`) {
            scrollIntoView(hash);
        }
    }, [name]);

    const hash = createUrlHash(parentKey, name);

    return (
        <div key={name} className={`highlight-config-node`} style={{paddingLeft: `${root ? 0 : INDENT_SIZE}px`}}
             id={hash}>
            <div className={`config-auxiliary-node`} style={{display: "inline-flex"}}>
                {parseItalics(name)}{removeTrailingSpaces(separator)}
            </div>
            <Link className={`config-anchor with-value-active hash-link`} href={`#${hash}`} onClick={handleClick}
                  title={hash}/>
            {renderYamlData(value, parentKey ? hash : parseUrlHash(name), false, separator, showAllDescriptions, defaultValue)}
        </div>
    );
};

const renderYamlData = (data, parentKey, root = false, separator, showAllDescriptions, defaultValue) => {
    const renderedNodes: JSX.Element[] = [];

    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'object' && value !== null) {
            if (('default' in value && typeof value.default !== 'object') || ('description' in value && typeof value.description !== 'object')) {
                renderedNodes.push(<YamlNodeWithDescription key={key} name={key} parentKey={parentKey} node={value}
                                                            root={root} separator={separator}
                                                            showAllDescriptions={showAllDescriptions}
                                                            defaultValue={defaultValue}/>);
            } else {
                renderedNodes.push(<YamlTreeNode root={root} key={key} name={key} parentKey={parentKey} value={value}
                                                 separator={separator} showAllDescriptions={showAllDescriptions}
                                                 defaultValue={defaultValue}/>);
            }
        }
    }

    return renderedNodes;
};

export default function Config({data, separator = ': ', showDescriptions = false, defaultValue = 'N/A'}) {
    const [showAllDescriptions, setShowAllExpanded] = useState(showDescriptions);
    let ymlData = yaml.load(data);
    return (
        <div>
            <pre className='config-container'>
                <button onClick={() => setShowAllExpanded(!showAllDescriptions)}
                        className={`config-button button button--secondary`}>{showAllDescriptions ? "Collapse All" : "Expand All"}</button>
                {renderYamlData(ymlData, '', true, separator, showAllDescriptions, defaultValue)}
            </pre>
        </div>
    );
}