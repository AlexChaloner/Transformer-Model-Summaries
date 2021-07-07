---
layout: default
---

# (The Transformer) Attention is All You Need

Arxiv Link: https://arxiv.org/pdf/1706.03762.pdf

Papers with Code link: https://paperswithcode.com/paper/attention-is-all-you-need

> Vaswani A, Shazeer N, Parmar N, Uszkoreit J, Jones L, Gomez AN, Kaiser L, Polosukhin I. Attention is all you need. arXiv preprint arXiv:1706.03762. 2017 Jun 12.

## Summary

Using only attention mechanisms (no LSTMs) to create an Encoder-Decoder model creates a well-performing language model.

## Architecture Details

### Tokenization

For English-German Task:
Byte pair encoding, vocab size 37000.

For English-French Task:
Wordpiece, vocab size 32000.

### Embeddings for multi-segment tasks

N/A

### Positional Encoding

Sinusoidal encodings.

HELLO

$ (PE_(pos, 2i) = sin(\frac{pos}{10000^(\frac{2i}{d})}) $

\[ ( PE(pos, 2i + 1) = cos(\frac{pos}{10000^(\frac{2i}{d}})) \]

$$ maths $$


### Attention Mechanism

Multi-head scaled dot-product attention.

## Training Details

### Pre-training Data

N/A

### Pre-training Method

N/A

### Finetuning Data

* WMT 2014 English-German Dataset; 4.5 million sentence pairs
* WMT 2014 English-French Dataset; 36 million sentences

### Finetuning Method

Each training batch contains 25000 source tokens, 25000 target tokens.

Adam optimizer

Warmup schedule, warmup for 4000 steps.

Dropout to each sub-layer, 0.1 prob for 'base', 0.3 prob for 'big'.

## Evaluation

### Evaluation Datasets

WMT 2014 English-German and English-French.

### Evaluation Results

BLEU scores:

* WMT 2014 English-German: 28.4
* WMT 2014 English-French: 41.0

Time taken: "3.5 days on 8 P100 GPUs".

## Author's Conclusions

* Transformer can be trained faster than architectures based on recurrent or convolutional layers
* Wish to investigated restricted attention mechanisms to efficiently handle large inputs and outputs (eg for images, audio, video).
* Also wish to make generation of text less sequential
