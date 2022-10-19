import React from 'react';

export default function highlightColor(color) {
  switch (color) {
    case 'Đỏ':
      return '#ff0000';
    case null:
      return null;
    default:
      alert('Nothing');
  }
}
