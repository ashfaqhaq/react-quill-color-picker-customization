import ReactQuill, { Quill } from 'react-quill';
import quillEmoji from 'quill-emoji';
import 'react-quill/dist/quill.snow.css';
const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

Quill.register(
  {
    'formats/emoji': EmojiBlot,
    'modules/emoji-shortname': ShortNameEmoji,
    'modules/emoji-toolbar': ToolbarEmoji,
    'modules/emoji-textarea': TextAreaEmoji,
  },
  true
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
      },
    },
  },
  keyboard: {
    bindings: {
      tab: false,
      custom: {
        key: 13,
        shiftKey: true,
        handler: function () {
          /** do nothing */
        },
      },
      handleEnter: {
        key: 13,
        handler: function () {
          /** do nothing */
        },
      },
    },
  },
  'emoji-toolbar': true,
  'emoji-textarea': true,
  'emoji-shortname': true,
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

export const quillEditor = () => (
  <ReactQuill modules={modulesQuill} formats={formatsQuill} />
);
