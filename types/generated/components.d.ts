import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    valueButton: Attribute.String & Attribute.Required;
    style: Attribute.Enumeration<['primary-btn', 'btn-white']>;
  };
}

export interface ButtonsButtom extends Schema.Component {
  collectionName: 'components_buttons_buttoms';
  info: {
    displayName: 'buttom';
    description: '';
  };
  attributes: {
    buttonName: Attribute.String;
    buttonLink: Attribute.String;
    styleButton: Attribute.Enumeration<
      [
        'btn primary-btn transparent btn-default',
        'btn primary-btn btn-default',
        'btn btn-white btn-default',
        'btn btn-default btn-gradient m-t-50'
      ]
    >;
  };
}

export interface ButtonsButtonClass extends Schema.Component {
  collectionName: 'components_buttons_button_classes';
  info: {
    displayName: 'buttonClass';
    description: '';
  };
  attributes: {
    buttonName: Attribute.String;
    description: Attribute.String;
  };
}

export interface ButtonsButton extends Schema.Component {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    buttonText: Attribute.String;
    buttonLink: Attribute.String;
  };
}

export interface CardsCards extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'Cards';
    icon: 'layout';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    h3: Attribute.Text;
    p: Attribute.Text;
    h4: Attribute.Text;
    h2: Attribute.Text;
    h6: Attribute.String;
    span: Attribute.String;
    title: Attribute.String;
    imageIcon: Attribute.Media;
  };
}

export interface CardsSimpleCard extends Schema.Component {
  collectionName: 'components_simple_card_simple_cards';
  info: {
    displayName: 'simpleCard';
    description: '';
  };
  attributes: {
    imagesimplecard: Attribute.Media;
    h3simplecard: Attribute.String;
    psimplecard: Attribute.String;
  };
}

export interface HeaderitensItemNav extends Schema.Component {
  collectionName: 'components_headeritens_item_navs';
  info: {
    displayName: 'itemNav';
    description: '';
  };
  attributes: {
    itemNav: Attribute.String;
    link: Attribute.String;
  };
}

export interface MainTypesCards extends Schema.Component {
  collectionName: 'components_main_types_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    titleCard: Attribute.String;
    textCard: Attribute.Blocks;
    imageCard: Attribute.Media;
  };
}

export interface MainTypesMainTypeSimple extends Schema.Component {
  collectionName: 'components_main_types_main_type_simples';
  info: {
    displayName: 'mainTypeSimple';
    description: '';
  };
  attributes: {};
}

export interface NavbarMenu extends Schema.Component {
  collectionName: 'components_navbar_menus';
  info: {
    displayName: 'Menu';
    icon: 'paperPlane';
    description: '';
  };
  attributes: {
    link: Attribute.Component<'navbar.nav-link', true>;
    menuitem: Attribute.String;
  };
}

export interface NavbarNavLink extends Schema.Component {
  collectionName: 'components_navbar_nav_links';
  info: {
    displayName: 'navLink';
    icon: 'oneWay';
    description: '';
  };
  attributes: {
    url: Attribute.Text;
    label: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'buttons.buttom': ButtonsButtom;
      'buttons.button-class': ButtonsButtonClass;
      'buttons.button': ButtonsButton;
      'cards.cards': CardsCards;
      'cards.simple-card': CardsSimpleCard;
      'headeritens.item-nav': HeaderitensItemNav;
      'main-types.cards': MainTypesCards;
      'main-types.main-type-simple': MainTypesMainTypeSimple;
      'navbar.menu': NavbarMenu;
      'navbar.nav-link': NavbarNavLink;
    }
  }
}
