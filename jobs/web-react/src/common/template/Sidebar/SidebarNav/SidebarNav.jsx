import React, { useState, forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";


function renderExpandMoreIcon() {
  return <ExpandMoreIcon className="sidebar-item-expand-arrow" />
}

function renderExpandLessIcon() {
  return <ExpandLessIcon className="sidebar-item-expand-arrow sidebar-item-expand-arrow-expanded" />
}

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {

  const [collapsed, setCollapsed] = useState(true);
  const { label, icon, items, onClick: onClickProp } = item;

  function renderExpandIcon(items) {
    if (Array.isArray(items)) {
      return collapsed ? renderExpandMoreIcon() : renderExpandLessIcon();
    }
  }

  // const permissions = userContext.Consumer._currentValue;
  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let CustomRouterLink;

  if (!Array.isArray(items)) {
    CustomRouterLink = forwardRef((props, ref) => (
      <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink {...props} />
      </div>
    ));
  }

  return (
    <>
      <ListItem
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        component={CustomRouterLink}
        to={"/" + item.name}
        {...rest}
      >
        {icon}
        <div className="sidebar-text" >{label}</div>
        {renderExpandIcon(items)}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : (
                    <SidebarItem
                      depth={depth + 1}
                      depthStep={depthStep}
                      item={subItem}
                      style={{
                        padding: '8px 0px 8px 80px'
                      }}
                    />
                  )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse >
    </>
  );
}

function SidebarNav({ items, depthStep, depth, expanded }) {
  return (
    <div className="sidebar">
      <a href="/dashboard"><img alt="Logo" className="logo" src="/images/logos/logo.png" /></a>
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (
              <Divider style={{ margin: "6px 0" }} />
            ) : (
                <SidebarItem
                  depthStep={depthStep}
                  depth={depth}
                  expanded={expanded}
                  item={sidebarItem}
                />
              )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default SidebarNav;
