export interface TermiosConfig {
    readonly iflag: number;
    readonly oflag: number;
    readonly cflag: number;
    readonly lflag: number;
    readonly cc: ReadonlyArray<number>;
}
export declare class Termios implements TermiosConfig {
    readonly iflag: number;
    readonly oflag: number;
    readonly cflag: number;
    readonly lflag: number;
    readonly cc: ReadonlyArray<number>;
    constructor(iflag: number, oflag: number, cflag: number, lflag: number, cc: ReadonlyArray<number>);
    readonly ISTRIP_P: boolean;
    readonly INLCR_P: boolean;
    readonly IGNCR_P: boolean;
    readonly ICRNL_P: boolean;
    readonly IUCLC_P: boolean;
    readonly IXON_P: boolean;
    readonly IXANY_P: boolean;
    readonly IUTF8_P: boolean;
    readonly OPOST_P: boolean;
    readonly OLCUC_P: boolean;
    readonly ONLCR_P: boolean;
    readonly OCRNL_P: boolean;
    readonly ONOCR_P: boolean;
    readonly ONLRET_P: boolean;
    readonly TABDLY_XTABS_P: boolean;
    readonly ISIG_P: boolean;
    readonly ICANON_P: boolean;
    readonly ECHO_P: boolean;
    readonly ECHOE_P: boolean;
    readonly ECHOK_P: boolean;
    readonly ECHONL_P: boolean;
    readonly NOFLSH_P: boolean;
    readonly ECHOCTL_P: boolean;
    readonly ECHOPRT_P: boolean;
    readonly ECHOKE_P: boolean;
    readonly IEXTEN_P: boolean;
    readonly INTR_V: number;
    readonly QUIT_V: number;
    readonly ERASE_V: number;
    readonly KILL_V: number;
    readonly EOF_V: number;
    readonly TIME_V: number;
    readonly MIN_V: number;
    readonly SWTCH_V: number;
    readonly START_V: number;
    readonly STOP_V: number;
    readonly SUSP_V: number;
    readonly EOL_V: number;
    readonly REPRINT_V: number;
    readonly DISCARD_V: number;
    readonly WERASE_V: number;
    readonly LNEXT_V: number;
    readonly EOL2_V: number;
    static fromConfig(config: TermiosConfig): Termios;
    clone(): Termios;
}
export declare const defaultTermios: Termios;
