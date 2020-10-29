import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-builer',
  templateUrl: './builer.component.html',
  styleUrls: ['./builer.component.scss']
})
export class BuilerComponent implements OnInit {

  modalPopupObject: any;
  modalRef: BsModalRef;

  inputItems = [
    { name: 'Name', type: 'text', label: '', class: 'form-control', id: '', formName: '', placeholder: '', category: 'input' },
    { name: 'Date', type: 'date', label: '', class: 'form-control', id: '', formName: '', placeholder: '', category: 'input' },
    { name: 'Phone', type: 'tel', label: '', class: 'form-control', id: '', formName: '', placeholder: '', category: 'input' },
    { name: 'Address', type: 'addr', label: '', class: 'form-control', id: '', formName: '', placeholder: '', category: 'input' },
    { name: 'Number', type: 'number', label: '', class: 'form-control', id: '', formName: '', placeholder: '', category: 'input' },
    { name: 'File Upload', type: 'file', label: '', class: '', id: '', formName: '', placeholder: '', category: 'input' },
    { name: 'Checkbox', type: 'checkbox', label: '', class: '', id: '', formName: '', placeholder: '', category: 'input' },
    { name: 'Drop Down List', label: '', class: 'form-control', values: [], selected: '', category: 'select' },
    { name: 'Text', label: '', class: 'form-control', id: '', rows: 5, category: 'textarea' },
    { name: 'Table', label: '', class: 'table', theadValues: [], id: '', category: 'table' },
  ];

  @ViewChild('template', {static: false}) modalTemplate;
  droppedinputItems = [];
  droppedItems = [];
  currentDraggedItem: any;

  selectValues = [];
  tableHeadValues = [];

  constructor(private modalService: BsModalService) {
    this.modalPopupObject = {};
  }
  ngOnInit(): void {
  }
  openModal() {
    this.modalRef = this.modalService.show(
      this.modalTemplate,
      Object.assign({}, { class: 'modal-lg' })
    );
  }
  onAnyDrop(e: any) {
    this.currentDraggedItem = e;
    this.openModal();
  }

  removeItem(item: any) {
    const index = this.droppedItems.indexOf(item);
    this.droppedItems.splice(index, 1);
  }
  onSubmit(f: any): void {
    this.modalRef.hide();
    this.updateDroppedItem(f.value);
  }
  updateDroppedItem(e: any): void {
    let itm;
    if (this.currentDraggedItem.dragData.category === 'input') {
      itm = {
        placeholder: e.placeholder,
        id: e.id,
        class: 'form-control',
        type: this.currentDraggedItem.dragData.type,
        label: e.label,
        category: this.currentDraggedItem.dragData.category
      };
    } else if (this.currentDraggedItem.dragData.category === 'table') {
      itm = {
        id: e.id,
        class: 'table',
        label: e.label,
        rows: Array(e.rows),
        cols: Array(e.cols),
        theadValues: this.tableHeadValues,
        category: this.currentDraggedItem.dragData.category
      };
    } else if (this.currentDraggedItem.dragData.category === 'textarea') {
      itm = {
        id: e.id,
        class: 'form-control',
        formName: e.name,
        label: e.label,
        rows: e.rows,
        category: this.currentDraggedItem.dragData.category
      };
    } else {
        itm = {
          label: e.label,
          category: this.currentDraggedItem.dragData.category,
          values: this.selectValues,
          id: e.id,
          class: 'form-control'
        };
        this.selectValues = [];
    }
    this.currentDraggedItem.dragData = itm;
    this.droppedItems.push(this.currentDraggedItem.dragData);
  }

  removeValueFromTHead(val) {
    this.tableHeadValues = this.tableHeadValues.filter(v => v != val);
  }
  addToThead(tHead) {
    if (tHead.value == '' || !tHead.value) {
      return;
    }
    this.tableHeadValues.push(tHead.value);
  }
  addToDropDown(dropdown) {
    if (dropdown.value == '' || !dropdown.value) {
      return;
    }
    this.selectValues.push(dropdown.value);
  }
  removeValueFromDropDown(val) {
    this.selectValues = this.selectValues.filter(v => v != val);
  }
}
