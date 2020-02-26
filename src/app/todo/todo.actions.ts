import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
// tslint:disable-next-line: variable-name
export const TOGGLE_All_TODO = '[TODO] Toggle all todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const LIMPIAR_TODO = '[TODO] Limpiar todo';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) {

    }
}

export class ToogleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) {

    }
}

export class ToogleAllTodoAction implements Action {
    readonly type = TOGGLE_All_TODO;

    constructor(public completado: boolean) {

    }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string) {

    }
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor(public id: number) {

    }
}

export class LimpiarTodoAction implements Action {
    readonly type = LIMPIAR_TODO;

}


export type Acciones = AgregarTodoAction | ToogleTodoAction | EditarTodoAction | BorrarTodoAction|ToogleAllTodoAction|LimpiarTodoAction ;
