var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from '../../components/MyLabel';
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['normal', 'h1', 'h2', 'h3'],
            }
        },
        color: {
            control: {
                type: 'color',
            }
        }
    }
};
var template = function (args) { return _jsx(MyLabel, __assign({}, args), void 0); };
export var Basic = template.bind({});
Basic.args = {
    label: 'Basic label',
};
export var AllCaps = template.bind({});
AllCaps.args = {
    label: 'All caps',
    allCaps: true,
};
export var Secondary = template.bind({});
Secondary.args = {
    label: 'Secondary',
    color: 'secondary',
};
export var Tertiary = template.bind({});
Tertiary.args = {
    label: 'Tertiary',
    color: 'tertiary',
};
export var FontColor = template.bind({});
Tertiary.args = {
    size: 'h1',
    fontColor: '#5517ac',
};
export var CustomBgColor = template.bind({});
CustomBgColor.args = {
    size: 'h1',
    fontColor: '#5517ac',
    bgColor: '#922828',
};
