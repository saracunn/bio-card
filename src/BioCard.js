import { html, css, LitElement } from 'lit-element';

export class BioCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--bio-card-text-color, #000);
      }

      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 250px;
        margin: auto;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
      }

      .title {
        color: grey;
        font-size: 25px;
      }

      a {
        text-decoration: none;
        font-size: 22px;
        color: white;
      }

      ul.social-media-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        font-size: 0px;
      }

      ul.social-media-list li {
        display: inline-block;
        margin: 4px;
      }

      ul.social-media-list img {
        padding: 5px;
        border-radius: 5px;
        background-color: lightblue;
        width: 25px;
        height: 25px;
      }

      ul.social-media-list img:hover {
        background-color: grey;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      img: { type: String },
      location: { type: String },
      jobtitle: { type: String},
      twitter: { type: String},
      linkedin: { type: String},
      github: { type: String }
    };
  }

  constructor() {
    super();
    this.name = "Name";
    this.img = "Profile image";
    this.twitter = "twitter url";
    this.linkedin = "linkedin url";
    this.github = "github url";
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.img}" alt="Profile image" style="width:100%">
        <h1>${this.name}</h1>
        <div class="title">
          <b><slot name="job title"></slot></b>
        </div>
        <p><slot name="location"></slot></p>
        <div style="margin: 24px 0;">
      <ul class="social-media-list">
        <li><a href="${this.twitter}"><img src="https://image.flaticon.com/icons/svg/1051/1051382.svg" alt="twitter"></a></li>
        <li><a href="${this.github}"><img src="https://image.flaticon.com/icons/svg/1051/1051377.svg" alt="github"></a></li>
        <li><a href="${this.linkedin}"><img src="https://image.flaticon.com/icons/svg/2111/2111723.svg" alt="linkedin"></a></li>
      </ul>
      </div>
      </div>
    `;
  }
}
