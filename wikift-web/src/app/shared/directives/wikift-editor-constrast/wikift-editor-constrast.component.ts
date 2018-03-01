/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, OnInit, Output, Input, EventEmitter, Directive } from '@angular/core';
import { AfterViewInit, OnChanges, ViewChild } from '@angular/core';

declare var CodeMirror: any;

@Component({
    selector: 'wikift-editor-constrast',
    templateUrl: './wikift-editor-constrast.component.html'
})
export class WikiftEditorConstrastComponent implements OnInit {

    // 源文件内容
    @Input('source')
    source;

    // 对比文件内容
    @Input('target')
    target;

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        if (!this.source || !this.target) {
            throw new Error('source and target must not null');
        }
        const panes = 2;
        CodeMirror.MergeView(document.getElementById('wikiftEditorConstrast'), {
            value: this.source,
            origLeft: panes >= 3 ? this.source : null,
            orig: this.target,
            lineNumbers: true,
            mode: 'markdown',
            highlightDifferences: true,
            connect: 'align',
            collapseIdentical: true
        });
    }

}
