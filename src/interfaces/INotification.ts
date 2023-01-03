export enum TIPONOTIFICATION {
    SUCESSO,
    ERROR,
    WARNING
}

export interface INotification{
    titulo: string,
    texto: string,
    tipo: TIPONOTIFICATION,
    id: number
}
