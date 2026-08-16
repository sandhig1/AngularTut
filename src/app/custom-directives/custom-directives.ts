import { Component } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';
import { Highlight } from '../../custom-directives/highlight/highlight';
import { CopyDirective } from '../../custom-directives/copyDirective/copyDirective';
import { FormsModule } from '@angular/forms';
import { Pastedirective } from '../../custom-directives/pastedirective/pastedirective';
import { Numberonly } from '../../custom-directives/numberonly/numberonly';

@Component({
  selector: 'app-custom-directives',
  imports: [FormsModule,  Mypageheader, Highlight, CopyDirective, Pastedirective, Numberonly],
  templateUrl: './custom-directives.html',
  styleUrl: './custom-directives.css',
})
export class CustomDirectives {
  copyText :string ="";
  copyPasteCaption:string = "";
  isCopy :boolean=true;

  copyPasteTextChanged(){
    this.isCopy = false;
    this.copyPasteCaption = "";
  }

  copyPasteText(){
    if (this.isCopy){
      this.copyPasteCaption = "Click here to Paste copied text"; 
    }
    this.isCopy = !this.isCopy;
  }
}
