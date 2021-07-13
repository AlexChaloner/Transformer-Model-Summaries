---
title: (The Transformer) Attention is All You Need
tags: [architecture, attention]
keywords: transformer, attention, vaswani
last_updated: July 2021
summary: "The Transformer is an encoder-decoder architecture using multi-layer attention-only layers."
sidebar: home_sidebar
permalink: transformer.html
---

[PDF](https://arxiv.org/pdf/1706.03762.pdf)

[Papers with Code](https://paperswithcode.com/paper/attention-is-all-you-need)

> Vaswani A, Shazeer N, Parmar N, Uszkoreit J, Jones L, Gomez AN, Kaiser L, Polosukhin I. Attention is all you need. arXiv preprint arXiv:1706.03762. 2017 Jun 12.

## Size and Pretraining Costs

|Model           |Parameters       |Train Steps|Tokens per step|Normalized computation cost (Parameters x steps x tokens per step)|
|----------------|-----------------|-----------|---------------|-------------------------------------------------------------|
|Transformer base|$65 \times 10^6$ |100K       |50000          |$3.25 \times 10^{17}$                                        |
|Transformer big |$213 \times 10^6$|300K       |50000          |$3.195 \times 10^{18}$                                       |

## Architecture Details

### Tokenization

For English-German Task:
Byte pair encoding, vocab size 37000.

For English-French Task:
Wordpiece, vocab size 32000.

### Embeddings for multi-segment tasks

N/A - Multi-segment tasks are not considered in this paper.

### Positional Encoding

Sinusoidal encodings.

$ PE_{pos, 2i} = sin \big{(} \frac{pos}{10000^{\frac{2i}{d}}} \big{)}$

$ PE_{pos, 2i + 1} = cos \big{(} \frac{pos}{10000^{\frac{2i}{d}}} \big{)} $

### Attention Mechanism

Multi-head scaled dot-product attention.

## Training Details

### Pre-training Data

N/A - This method does not do pre-training.

### Pre-training Method

N/A - This method does not do pre-training.

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
