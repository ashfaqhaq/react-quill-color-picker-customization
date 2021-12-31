import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import EditorQuill from './EditorQuill';
import './style.css';
import 'react-quill/dist/quill.bubble.css'; // ES6
import ReactQuill, { Quill } from 'react-quill';
import quillEmoji from 'quill-emoji';
import 'react-quill/dist/quill.snow.css';
const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;
import 'quill/dist/quill.core.css';
var Font = Quill.import('formats/font');
Font.whitelist = ['mirza', 'roboto'];
Quill.register(Font, true);

const CustomToolbar = () => (
  <div id="aaa">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option selected></option>
    </select>
    <select className="ql-font">
      <option selected>Aref Ruqaa</option>
      <option value="mirza">Mirza</option>
      <option value="roboto">Roboto</option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <button className="ql-link"></button>
  </div>
);
const modulesQuill = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        {
          color: [
            '#000000',
            '#e60000',
            '#ff9900',
            '#ffff00',
            '#008a00',
            '#0066cc',
            '#9933ff',
            '#ffffff',
            '#facccc',
            '#ffebcc',
            '#ffffcc',
            '#cce8cc',
            '#cce0f5',
            '#ebd6ff',
            '#bbbbbb',
            '#f06666',
            '#ffc266',
            '#ffff66',
            '#66b966',
            '#66a3e0',
            '#c285ff',
            '#888888',
            '#a10000',
            '#b26b00',
            '#b2b200',
            '#006100',
            '#0047b2',
            '#6b24b2',
            '#444444',
            '#5c0000',
            '#663d00',
            '#666600',
            '#003700',
            '#002966',
            '#3d1466',
            'custom-color',
            'color-picker',
          ],
        },
        { background: [] },
        'link',
        'emoji',
      ],
    ],
    handlers: {
      color: function (value) {
        if (value == 'custom-color')
          value = window.prompt('Enter Hex Color Code');
        this.quill.format('color', value);
        if (value === 'color-picker') {
          var picker = document.getElementById('color-picker');
          if (!picker) {
            picker = document.createElement('input');
            picker.id = 'color-picker';
            picker.type = 'color';
            picker.style.display = 'none';
            picker.value = '#FF0000';
            document.body.appendChild(picker);
            const _quill = this.quill;
            picker.addEventListener(
              'change',
              function () {
                console.log(this);
                // Quill.color(picker.value);
                // Quill.register('formats/color', picker.value, true);
                // console.log(picker);
                _quill.format('color', picker.value);
                // console.log(Quill())
                // this.format('color', picker.value);
                // console.log(picker.value);
              },
              false
            );
          }
          picker.click();
        } else {
          this.quill.format('color', value);
        }
      },
    },
  },
  // keyboard: {
  //   bindings: {
  //     tab: false,
  //     custom: {
  //       key: 13,
  //       shiftKey: true,
  //       handler: function () {
  //         /** do nothing */
  //       },
  //     },
  //     handleEnter: {
  //       key: 13,
  //       handler: function () {
  //         /** do nothing */
  //       },
  //     },
  //   },
  // },
  // 'emoji-toolbar': true,
  // 'emoji-textarea': true,
  // 'emoji-shortname': true,
};

const formatsQuill = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'align',
  'link',
  'image',
  'background',
  'color',
  'emoji',
];
/*
[
              [{ header: [1, 2, 3, false] }],
              [{ 'font': [] }],
              [
                'bold',
                'italic',
                'underline',
                'strike',
                'blockquote',
                'link',
                { align: [] },
              ],
            ]
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      text: '',
    };
  }
  handleChange = (value) => {
    this.setState({ text: value });
  };
  render() {
    return (
      <div style={{ padding: 50 }}>
        <CustomToolbar />
        {/* <ReactQuill
          spellcheck="false"
          value={this.state.text}
          onChange={this.handleChange}
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              [{ 'font': [] }],
              [
                'bold',
                'italic',
                'underline',
                'strike',
                'blockquote',
                'link',
                { align: [] },
              ],
            ]
          }}
          placeholder='編輯區域'
          theme='bubble'
        /> */}
        <ReactQuill modules={modulesQuill} formats={formatsQuill} />
        {/* <EditorQuill /> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
