import { Service, signal, WritableSignal } from '@angular/core';

@Service()
export class Signalservice {
    readonly _count:WritableSignal<number>= signal(10);
    readonly count = this._count.asReadonly();

    increment(val:number){
        this._count.update((c)=>c+val);
    }
}
