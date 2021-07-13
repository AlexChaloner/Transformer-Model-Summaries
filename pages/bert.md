---
title: "(BERT) BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"
tags: [architecture]
keywords: transformer, BERT, attention, devlin, chang, lee, toutanova
last_updated: July 2021
summary: "BERT"
sidebar: home_sidebar
permalink: bert.html
---

[PDF](https://arxiv.org/pdf/1810.04805.pdf)

[Papers with Code](https://paperswithcode.com/paper/bert-pre-training-of-deep-bidirectional)


> Devlin J, Chang MW, Lee K, Toutanova K. Bert: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805. 2018 Oct 11.


## Summary

BERT combines the best ideas [ELMo]((ELMo)-Deep-contextualized-word-representations) and [Attention Is All You Need](https://github.com/AlexChaloner/Transformer-Model-Summaries/wiki/(Transformer)-Attention-Is-All-You-Need) to create a large _pre-trained_ language model which fine-tunes well to downstream tasks.


|Model             |Parameters       |Pretraining steps|Tokens per batch|Normalized computation cost (Parameters x steps x tokens per batch)|
|------------------|-----------------|-----------------|----------------|-------------------------------------------------------------------|
|BERT Base         |$110 \times 10^6$|$1 \times 10^6$  |128,000         |$1.408 \times 10^{19}$ |
|BERT Large        |$340 \times 10^6$|$1 \times 10^6$  |128,000         |$4.352 \times 10^{19}$ |

## Architecture Details

### Tokenization

WordPiece. (Wu et al)

### Embeddings for multi-segment tasks

Separate Embeddings for different Segment Types.

### Positional Encoding

Learnable Positional Embeddings.

### Attention Mechanism

Basic Attention.


## Training Details

### Pre-training Data

### Pre-training Method

**Masked Language Modelling:**
1. Choose 15% of tokens to mask.
2. Of these tokens, replace 80% with special token [MASK], 10% with a random token from vocabulary, and 10% with the same token.
3. Train model to predict those tokens based on sentence presented to them via cross-entropy loss.

**Next Sentence Prediction:**
1. Feed model two sentences
2. 50% of the time, choose the second sentence to be a sentence following from the first sentence in the original corpus. The other 50%, choose a random sentence.
3. Label these as 'ISNEXT' or 'NOTNEXT'.
4. Train model to predict these labels based on the input sentences.

### Finetuning Data

### Finetuning Method


## Evaluation

### Evaluation Datasets

### Evaluation Results


## Author's Conclusions