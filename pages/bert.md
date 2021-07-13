---
title: "(BERT) BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"
tags: [architecture]
keywords: transformer, BERT, attention, devlin, chang, lee, toutanova, devlin et al, 2018, google, language, google language
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

Learnable Absolute Positional Embeddings.

### Attention Mechanism

Multi-head scaled dot-product attention.

## Training Details

### Pre-training Data

BooksCorpus and English Wikipedia.

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

GLUE, SQuAD v1.1, SQuAD v2.0, SWAG

### Finetuning Method

### Results

**GLUE**

| Model       | MNLI-(m/mm) | QQP  | QNLI | SST-2 | CoLA | STS-B | MRPC | RTE  | GLUE Average |
|-------------|-------------|------|------|-------|------|-------|------|------|--------------|
| BERT-base   | 84.6/83.4   | 71.2 | 90.5 | 93.5  | 52.1 | 85.8  | 88.9 | 66.4 | 79.6         |
| BERT-large  | 86.7/85.9   | 72.1 | 92.7 | 94.9  | 60.5 | 86.5  | 89.3 | 70.1 | 82.1         |


**SQuAD 1.1**

The BERT paper presents models which are single, ensemble, and fine-tuned on extra data (TriviaQA).

EM stands for exact match.

| Model                            | Dev EM | Dev F1 | Test EM | Test F1 |
|----------------------------------|--------|--------|---------|---------|
| BERT-base  (Single)              | 80.8   | 88.5   | -       | -       |
| BERT-large (Single)              | 84.1   | 90.9   | -       | -       |
| BERT-large (Ensemble)            | 85.8   | 91.8   | -       | -       |
| BERT-large (Single + TriviaQA)   | 84.2   | 91.1   | 85.1    | 91.8    |
| BERT-large (Ensemble + TriviaQA) | 86.2   | 92.2   | 87.4    | 93.2    |


**SQuAD 2.0**

| Model       | Dev EM | Dev F1 | Test EM | Test F1 |
|-------------|--------|--------|---------|---------|
| BERT-large  | 78.7   | 81.9   | 80.0    | 83.1    |


**SWAG**

| Model       | Dev  | Test |
|-------------|------|------|
| BERT-base   | 81.6 | -    |
| BERT-large  | 86.6 | 86.3 |

### Ablation Tests


## Author's Conclusions

* Unsupervised pre-training is good for NLP systems
* Bidirectional architecture generalises well to many NLP tasks
