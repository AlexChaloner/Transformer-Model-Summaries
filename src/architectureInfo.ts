export interface Results {
    
}


export interface Dataset {
    name: string
    paper: string
    arxivLink: string
    summary: string

    exampleData: string
}



export interface ArchitectureInfo {
    name: string
    paper: string
    date: string
    arxivLink: string
    citation: string
    summary: string

    tokenization: string
    positionalEncoding: string
    attentionMechanism: string
    multiSegmentEmbedding: string

    pretrainingDatasets: string
    pretrainingMethod: string
    finetuningDatasets: string
    finetuningMethod: string

    results: Results

    conclusions: string
}



class BERTInfo implements ArchitectureInfo {
    name = 'BERT'

}


class TransformerInfo implements ArchitectureInfo {
    name: string = 'Transformer'
    paper: string = 'Attention is All You Need'
    date: string = 'Jun 2017'
    arxivLink: string = 'https://arxiv.org/abs/1706.03762'
    citation: string = 
        `
        Vaswani A, Shazeer N, Parmar N, Uszkoreit J, Jones L, Gomez AN, Kaiser L, Polosukhin I. 
        Attention is all you need. arXiv preprint arXiv:1706.03762. 2017 Jun 12.
        `
    summary: string = 
        `
        Uses only attention mechanisms (no LSTMs) to create an Encoder-Decoder model. Works well.
        `

    tokenization: string = 'Byte-Pair Encoding (BPE) and Wordpiece'
    positionalEncoding: string = 'Sinusoidal. MathJax here.'
    attentionMechanism: string =
    multiSegmentEmbedding: string =

    pretrainingDatasets: string =
    pretrainingMethod: string =
    finetuningDatasets: string =
    finetuningMethod: string =

    results: Results =

    conclusions: string =
}
